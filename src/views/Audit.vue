<template>
  <NavFooter>
    <section class="about_us section-padding" style="margin-top: 70px">
      <div class="container">
        <div class="row text-center">
          <div class="section-title wow zoomIn">
            <h2><span>{{ $t("message.audit.setStep1") }}</span></h2>
            <div></div>
          </div>
          <div class="section-title wow zoomIn">
            <h3><span>{{ $t("message.audit.setStep1Content") }}</span></h3>
          </div>

          <div>
            <input type="file" @change="getFile($event)" class="uploadFile"/>
            <button type="button" class="btn btn-default" data-dismiss="modal" @click="upload">
            Commit
            </button>
          </div>

        </div><!--- END ROW -->
      </div><!--- END CONTAINER -->
    </section>

    <section class="about_us section-padding">
      <div class="container">
        <div class="row text-center">
          <div class="section-title wow zoomIn">
            <h2><span>{{ $t("message.audit.setStep2") }}</span></h2>
            <div></div>
          </div>

          <div class="section-title wow zoomIn">
            <h3><span>{{ $t("message.audit.setStep2Content") }}</span></h3>
          </div>
        </div><!--- END ROW -->
      </div><!--- END CONTAINER -->
    </section>

  </NavFooter>
</template>

<script>
import NavFooter from "../components/NavFooter.vue";
import JumpButton from "../components/buttons/JumpButton.vue";
import { upload } from '../api/audit.js'
import {onMounted, reactive} from "vue";

export default {
  title: "Audit",
  components: {NavFooter, JumpButton},
   setup(){
     //文件改变
     const getFile=(params)=>{
      const  formData=new FormData()
       formData.append('file',params.target.files[0])
       console.log(formData.get('file'))
       try {
         //接口 file：上传字段
         upload({
           file:formData
         })
         alert('上传成功')
       }catch {
        return
       }
     }
     //点击上传
     const upload=()=>{
        document.getElementsByClassName('uploadFile')[0].click()
     }
    return {getFile,upload}
  }
}
</script>

<style scoped>
.btn-op {
  margin: 5px;
}
.uploadFile {
  display: none;
}
</style>