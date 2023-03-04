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
            <label for="hash-input">Hash for download:</label>
            <input type="text" id="hash-input" ref="hash" />

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
import confs from "../confs";
import { onMounted, reactive } from "vue";
import axios from 'axios';
import { ref } from 'vue';
import { SHA256 } from 'crypto-js';

export default {
  title: "Audit",
  components: { NavFooter },
  setup() {
    const fileInput = ref(null);
    const hash = ref(null);

    const uploadFile = () => {
      const formData = new FormData();
      formData.append('file', fileInput.value.files[0]);
      formData.append('contractName', $("#contractName").val());
      formData.append('hash', hash.value);

      axios.post(confs.backendsURL + "/audit/upload", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(response => {
        console.log('File uploaded successfully');
        console.log(response.data);
      }).catch(error => {
        console.log('Error uploading file');
      });
    };

    const downloadFile = () => {
      const fileUrl = "http://localhost:8099/" + hash.value + "/" + hash.value + ".pdf";
      console.log(fileUrl);

      axios.get(fileUrl, {
        responseType: 'blob'
      }).then(response => {
        if (response.status === 200) {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', hash.value + '.pdf');
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
        const file = files[0];
        const reader = new FileReader();
        reader.onload = () => {
          hash.value = SHA256(reader.result);
        };
        console.log(hash.value);
        reader.readAsBinaryString(file);
      } else {
        selectedFileName.value = '';
      }
    };

    return {
      fileInput,
      uploadFile,
      downloadFile,
      selectedFileName,
      onFileSelected,
      hash,
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
