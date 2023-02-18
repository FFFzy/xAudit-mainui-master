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
            <!-- <input
              type="file"
              id="files"
              name="file"
              @change="getFile($event)"
              class="uploadFile"
            />
            <button
              type="button"
              class="btn btn-default"
              data-dismiss="modal"
              @click="submit()"
            >
              Commit
            </button> -->
            <form id="myForm">
              <input type="file" name="file" />
              <input type="text" name="contractName" id="contractName" />

              <input type="submit" value="Upload" />
            </form>
            <label for="response">Hash for download:</label>
            <input type="text" id="response" />

            <button id="download-button">Download Data</button>
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

$(document).ready(function () {
  $("#myForm").submit(function (event) {
    event.preventDefault();
    var formData = new FormData(this);

    $.ajax({
      url: confs.backendsURL + "/audit/upload",
      type: "POST",
      data: formData,
      cache: false,
      contentType: false,
      processData: false,
      success: function (data) {
        console.log("File uploaded successfully");
        console.log(data);
        $("#response").val(data);
      },
      error: function (xhr, status, error) {
        console.log("Error uploading file");
      },
    });
  });

  $("#download-button").click(function () {
    var fileUrl =
      "http://localhost:8099/" +
      $("#response").val() +
      "/" +
      $("#response").val() +
      ".pdf"; // Replace with the URL of your file
    console.log(fileUrl);
    var xhr = new XMLHttpRequest();

    // Set the response type to blob to handle binary data
    xhr.responseType = "blob";

    // Set up the onload event to handle the response
    xhr.onload = function () {
      if (xhr.status === 200) {
        // Create a link element with the download attribute and click it to trigger the download
        var link = document.createElement("a");
        link.href = window.URL.createObjectURL(xhr.response);
        link.download = $("#contractName").val() + ".pdf"; // Replace with the desired filename
        link.click();
      }
    };

    // Send the request
    xhr.open("GET", fileUrl);
    xhr.send();
  });
});

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
.btn-op {
  margin: 5px;
}
.uploadFile {
  /* display: none; */
}
</style>
