<template>
  <NavFooter>
    <section class="about_us section-padding" style="margin-top: 70px">
      <div class="container">
        <div class="row text-center">
          <div class="section-title wow zoomIn">
            <h2>
              <span>{{ $t("message.audit.setStep1") }}</span>
            </h2>
            <div></div>
          </div>
          <div class="section-title wow zoomIn">
            <h3>
              <span>{{ $t("message.audit.setStep1Content") }}</span>
            </h3>
          </div>

          <div>
            <form id="myForm" ref="myForm" @submit.prevent="uploadFile">
              <div class="form-group">
<!--                <label for="file-type">Select file type:</label>-->
                <select id="file-type" name="fileType" ref="fileType" class="form-control" @change="onSelectChange">
                  <option value="file">File</option>
                  <option value="etherscan">Address on Etherscan</option>
                  <option value="github">Address on Github</option>
                </select>
              </div>
              <div class="divFileInput" v-if="showFileInput">
                <label for="file-upload" class="custom-file-upload">
                  <i class="fa fa-cloud-upload"></i> Choose File
                </label>
                <input
                  id="file-upload"
                  type="file"
                  @change="onFileSelected"
                  ref="fileInput"
                  style="display: none"
                />
                <input
                  type="text"
                  :value="selectedFileName"
                  placeholder="No file selected"
                  readonly
                />
              </div>

              <input v-if="showFileInput" type="text" name="contractName" id="contractName" placeholder="Contract/Project name"/>

              <input v-if="showAddressInput" type="text" ref="address" name="address" id="address" placeholder="Input an address on Etherscan/GitHub"/>

              <input type="submit" value="Upload" />
            </form>
          </div>
        </div>
        <!--- END ROW -->
      </div>
      <!--- END CONTAINER -->
    </section>

    <section class="about_us section-padding">
      <div class="container">
        <div class="row text-center">
          <div class="section-title wow zoomIn">
            <h2>
              <span>{{ $t("message.audit.setStep2") }}</span>
            </h2>
            <div></div>
          </div>

          <div class="section-title wow zoomIn">
            <h3>
              <span>{{ $t("message.audit.setStep2Content") }}</span>
            </h3>
          </div>
          <div id="step2" >
<!--            <label for="hash-input">Hash for download:</label>-->
            <input type="text" id="hash-input" ref="hash" placeholder="Hash for download"/>

            <div class="row text-center" style="margin-top: 50px"
                 v-if="isLoading">
              <div class="sp sp-circle"></div>
              <div>{{ $t("message.audit.setAuditLoading") }}</div>
            </div>

            <button id="download-button" class="download" @click="downloadFile" v-if="!isLoading">
              Download PDF
            </button>
          </div>
        </div>
        <!--- END ROW -->
      </div>
      <!--- END CONTAINER -->
    </section>
  </NavFooter>
</template>

<script>
import NavFooter from "../components/NavFooter.vue";
import JumpButton from "../components/buttons/JumpButton.vue";
import confs from "../confs";
import { onMounted, reactive } from "vue";
import axios from "axios";
import { ref } from "vue";
import CryptoJS from "crypto-js";

export default {
  title: "Audit",
  components: { NavFooter },
  setup() {
    const fileInput = ref(null);
    const hash = ref('');
    const fileType = ref("");
    const address = ref("");
    const isLoading = ref(false);
    const showFileInput = ref(true);
    const showAddressInput = ref(false);
    const pollingInterval = 3000; // interval in milliseconds for polling the server
    let pollId = null; // id of the polling timer

    const uploadFile = async () => {
      const formData = new FormData();

      if (fileType.value === "file") {
        formData.append("fileType", fileType.value);
        formData.append("file", fileInput.value.files[0]);
        formData.append("contractName", $("#contractName").val());
      } else if (fileType.value === "address" || fileType.value === "github") {
        // Code to handle address upload
        formData.append("fileType", fileType.value);
        formData.append("address", address.value);
        hash.value = address.value
        console.log(hash.value, "111")
      }

      // axios
      //   .post(confs.backendsURL + "/audit/upload", formData, {
      //     headers: {
      //       "Content-Type": "multipart/form-data",
      //     },
      //   })
      //   .then((response) => {
      //     console.log("File uploaded successfully");
      //     console.log(response.data);
      //   })
      //   .catch((error) => {
      //     console.log("Error uploading file");
      //   });

      try {
        const response = await axios.post(confs.backendsURL + "/audit/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log("File uploaded successfully");
        console.log(response.data);

        // Start polling the server for processing status
        pollId = setInterval(async () => {
          try {
            const pollResponse = await axios.get("http://localhost:8099/" + hash.value.value + "/" + hash.value.value + ".pdf");
            if (pollResponse.status !== 200) {
              console.log("File is still being processed...");
            } else {
              console.log("File processing is complete!");
              isLoading.value = false;
              clearInterval(pollId); // stop polling
            }
          } catch (error) {
            console.log("Error polling server:", error);
            clearInterval(pollId); // stop polling
          }
        }, pollingInterval);

        isLoading.value = true; // show loading animation while processing
      } catch (error) {
        console.log("Error uploading file:", error);
      }
    };

    const downloadFile = () => {
      const fileUrl =
        "http://localhost:8099/" + hash.value.value + "/" + hash.value.value + ".pdf";
      console.log(fileUrl);

      axios
        .get(fileUrl, {
          responseType: "blob",
        })
        .then((response) => {
          if (response.status === 200) {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", hash.value.value + ".pdf");
            link.click();
          }
        })
        .catch((error) => {
          console.log("Error downloading file");
        });
    };

    async function calculateFileHash(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          const fileWordArray = CryptoJS.lib.WordArray.create(reader.result);
          const hash = CryptoJS.SHA256(fileWordArray).toString();
          resolve(hash);
        };
        reader.onerror = () => {
          reject(new Error("Failed to read file"));
        };
        reader.readAsArrayBuffer(file);
      });
    }

    const selectedFileName = ref("");

    const onFileSelected = async (event) => {
      const files = event.target.files;
      const file = files[0];
      const fileHash = await calculateFileHash(file);
      hash.value = fileHash;
      console.log(hash.value);
      $("#hash-input").val(fileHash);
      if (files.length > 0) {
        selectedFileName.value = files[0].name;
      } else {
        selectedFileName.value = "";
      }
    };

    const onSelectChange = async (event) => {
      const selectedValue = event.target.value;
      if (selectedValue === "etherscan" || selectedValue === "github") {
        showFileInput.value = false;
        showAddressInput.value = true;
      } else {
        showFileInput.value = true;
        showAddressInput.value = false;
      }
    };

    return {
      fileInput,
      uploadFile,
      downloadFile,
      selectedFileName,
      onFileSelected,
      hash,
      isLoading,
      fileType,
      onSelectChange,
      showFileInput,
      showAddressInput,
      address
    };
  },
};
</script>

<style scoped>
#myForm {
  margin: 20px auto;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/*#myForm input[type="file"],*/
#myForm input[type="text"],
#myForm input[type="submit"] {
  display: block;
  margin: 10px 0;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  color: #495057;
}

#myForm div {
  display: block;
  margin: 10px 0;
  width: 100%;
  font-size: 16px;
  border: none;
}

#myForm input[type="submit"] {
  background-color: #248054;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

#myForm input[type="submit"]:hover {
  background-color: #248054;
}

#step2 {
  margin: 20px auto;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#hash-input {
  margin-top: 20px;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  color: #495057;
}

#download-button {
  margin-top: 20px;
  padding: 10px;
  width: 100%;
  background-color: #248054;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

#download-button:hover {
  background-color: #248054;
}

.upload-label span {
  margin-left: 10px;
}

.form-group {
  position: relative;
  margin-bottom: 1rem;
}

.form-control {
  display: block;
  width: 100%;
  height: 48px;
  padding: 10px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.form-control:focus {
  border-color: #495057;
  box-shadow: none;
}

.custom-file-upload {
  display: inline-block;
  padding: 6px 12px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.custom-file-upload:hover {
  background-color: #f5f5f5;
}

.fa-cloud-upload {
  margin-right: 5px;
}

.divFileInput {
  position: relative;
  width: 100%;
  /*background-color: #f1f1f1;*/
}

.divFileInput label {
  position: absolute;
  top: 14px;
  right: 3px;
  background-color: #fff;
  border: none;
  outline: none;
}
</style>
