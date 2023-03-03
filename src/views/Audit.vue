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
<!--              <input type="file" name="file" class="upload-input" />-->
<!--              <input type="text" name="contractName" id="contractName" />-->
<!--              <input type="submit" value="Upload" />-->

<!--              <input type="file" name="file" ref="fileInput" style="display:none"/>-->

              <div class="divFileInput" >
                <label for="file-upload" class="custom-file-upload">
                  <i class="fa fa-cloud-upload"></i> Choose File
                </label>
                <input id="file-upload" type="file" @change="onFileSelected" ref="fileInput" style="display:none">
                <input type="text" :value="selectedFileName" placeholder="No file selected" readonly >
              </div>

              <input type="text" name="contractName" id="contractName" />

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
          <div id="step2">
            <label for="response">Hash for download:</label>
            <input type="text" id="response" ref="responseInput" />

            <button id="download-button" class="download" @click="downloadFile">Download PDF</button>
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
// import { upload } from "../api/audit.js";
import confs from "../confs";
import { onMounted, reactive } from "vue";
import axios from 'axios';
import { ref } from 'vue';

export default {
  title: "Audit",
  components: { NavFooter },
  setup() {
    const fileInput = ref(null);
    const responseInput = ref(null);

    const uploadFile = () => {
      const formData = new FormData();
      formData.append('file', fileInput.value.files[0]);
      formData.append('contractName', $("#contractName").val());

      axios.post(confs.backendsURL + "/audit/upload", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(response => {
        console.log('File uploaded successfully');
        console.log(response.data);
        responseInput.value.value = response.data;
      }).catch(error => {
        console.log('Error uploading file');
      });
    };

    const downloadFile = () => {
      const fileUrl = "http://localhost:8099/" + responseInput.value.value + "/" + responseInput.value.value + ".pdf";
      console.log(fileUrl);

      axios.get(fileUrl, {
        responseType: 'blob'
      }).then(response => {
        if (response.status === 200) {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', responseInput.value.value + '.pdf');
          link.click();
        }
      }).catch(error => {
        console.log('Error downloading file');
      });
    };

    const selectedFileName = ref('');

    const onFileSelected = (event) => {
      const files = event.target.files;
      if (files.length > 0) {
        selectedFileName.value = files[0].name;
      } else {
        selectedFileName.value = '';
      }
    };

    return {
      fileInput,
      responseInput,
      uploadFile,
      downloadFile,
      selectedFileName,
      onFileSelected,
    };


    // $(document).ready(function () {
    //   $("#myForm").submit(function (event) {
    //     event.preventDefault();
    //     var formData = new FormData(this);
    //
    //     $.ajax({
    //       url: confs.backendsURL + "/audit/upload",
    //       type: "POST",
    //       data: formData,
    //       cache: false,
    //       contentType: false,
    //       processData: false,
    //       success: function (data) {
    //         console.log("File uploaded successfully");
    //         console.log(data);
    //         $("#response").val(data);
    //       },
    //       error: function (xhr, status, error) {
    //         console.log("Error uploading file");
    //       },
    //     });
    //   });
    //
    //   $("#download-button").click(function () {
    //     var fileUrl =
    //         "http://localhost:8099/" +
    //         $("#response").val() +
    //         "/" +
    //         $("#response").val() +
    //         ".pdf"; // Replace with the URL of your file
    //     console.log(fileUrl);
    //     var xhr = new XMLHttpRequest();
    //
    //     // Set the response type to blob to handle binary data
    //     xhr.responseType = "blob";
    //
    //     // Set up the onload event to handle the response
    //     xhr.onload = function () {
    //       if (xhr.status === 200) {
    //         // Create a link element with the download attribute and click it to trigger the download
    //         var link = document.createElement("a");
    //         link.href = window.URL.createObjectURL(xhr.response);
    //         link.download = $("#response").val() + ".pdf"; // Replace with the desired filename
    //         link.click();
    //       }
    //     };
    //
    //     // Send the request
    //     xhr.open("GET", fileUrl);
    //     xhr.send();
    //   });
    // });
  },
};

// export default {
//   title: "Audit",
//   components: { NavFooter, JumpButton },
//   setup() {
//     //文件改变
//     const getFile = (event) => {
//       console.log(event.target.files[0]);
//     };
//     return { getFile };
//   },
// };
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
#myForm input[type="submit"]{
  display: block;
  margin: 10px 0;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

#myForm div{
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

#step2{
  margin: 20px auto;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#response {
  margin-top: 20px;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
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

.divFileInput{
  position: relative;
  width: 100%;
  /*background-color: #f1f1f1;*/
}

.divFileInput label{
  position: absolute;
  top: 14px;
  right: 3px;
  background-color: #fff;
  border: none;
  outline: none;
}

</style>
