<template>
  <NavFooter>
    <section class="contact_area section-padding"
             style="margin-top: 100px;padding-bottom: 0">
      <div class="container">
        <div class="row">
          <div class="col-md-12 wow fadeInUp" style="padding-bottom: 15px">
            <div class="contact_address">
              <div class="row">
                <h3 class="col-md-12">
                  <i class="fa fa-file-text-o text-primary"
                     style="margin-right: 5px"></i>
                  {{ paper.title }}
                </h3>
              </div>
              <p>{{ paper.introduction }}</p>

              <div class="row">
                <div class="col-md-12">
                  <button type="button" class="btn btn-tag btn-primary btn-xs pull-left"
                          style="margin: 2px"
                          v-for="category in paper.categories">
                    {{ category }}
                  </button>
                  <span class="pull-right btn-op">
                    <CiteButton
                        :BibTex="paper.bibtex"
                        :IEEECite="paper.ieeecite"
                        :ACMCite="paper.acmcite"
                    ></CiteButton>
                  </span>
                  <span class="pull-right btn-op">
                    <JumpButton
                        :icon="'fa-file-powerpoint-o'"
                        :color="'btn-primary'"
                        :func-jump="(paper.url4ppt !== '')? ()=>{funcJumpDownload(paper.url4ppt)}:null"
                        :info="'PPT'"
                        style="margin-right: 5px"
                    ></JumpButton>
                  </span>
                  <span class="pull-right btn-op">
                    <JumpButton
                        :icon="'fa-download'"
                        :color="'btn-primary'"
                        :func-jump="(paper.url !== '')? ()=>{funcJumpDownload(paper.url)}:null"
                        :info="$t('message.searchItem.btnPaperDownload')"
                        style="margin-right: 5px"
                    ></JumpButton>
                  </span>
                </div>
              </div>
            </div>
          </div><!-- END COL -->
        </div><!--- END ROW -->
      </div><!--- END CONTAINER -->

      <div :class="paper.readme===''? 'hidden':''" style="background: #f7f7f7">
        <div class="container wow fadeInUp" style="padding: 30px">
          <div class="row">
            <div id="readme"></div>
          </div>
        </div>
      </div>
    </section>
    <CommentArea></CommentArea>
  </NavFooter>
</template>

<script>
import NavFooter from "../components/NavFooter.vue";
import {onMounted, reactive} from "vue";
import CommentArea from "../components/CommentArea.vue";
import confs from "../confs";
import {useRouter} from "vue-router";
import CiteButton from "../components/buttons/CiteButton.vue";
import JumpButton from "../components/buttons/JumpButton.vue";

export default {
  title: "Paper",
  components: {JumpButton, CiteButton, CommentArea, NavFooter},
  setup() {
    const router = useRouter();
    const pID = router.currentRoute.value.params.id

    const paper = reactive({
      title: "",
      introduction: "",
      url: "",
      url4ppt: "",
      readme: "",
      time: "",
      bibtex: "",
      ieeecite: "",
      acmcite: "",
      datasetID: 0,
      categories: [],
    })


    const funcJumpDownload = (_url) => {
      $.ajax({
        url: confs.backendsURL + "/api/info/paper/download/record",
        type: "GET",
        data: {"id": pID},
        traditional: true,
      })
      const u = new URL(_url)
      if (u.protocol === 'ipfs:') {
        router.push({
          "path": "/download/" + u.pathname.slice(2),
        })
        return
      }
      window.location = _url
    }

    onMounted(() => {
      $.ajax({
        url: confs.backendsURL + "/api/info/paper",
        type: "GET",
        data: {"id": pID},
        traditional: true,
        success: (rsp) => {
          let data = rsp.data
          paper.title = data.title
          paper.introduction = data.introduction
          paper.url = data.url
          paper.url4ppt = data.url4ppt
          paper.time = data.time
          paper.bibtex = data.bibtex
          paper.ieeecite = data.ieeecite
          paper.acmcite = data.acmcite
          paper.datasetID = data.dataset_id
          if (data.categories) {
            for (let c of data.categories) {
              paper.categories.push(c.name)
            }
          }
          paper.readme = data.readme

          // marked代码高亮
          marked.setOptions({
            highlight: function (code) {
              return hljs.highlightAuto(code).value;
            },
          })
          document.getElementById('readme').innerHTML = marked(paper.readme)

          // marked渲染的表格没边框（真的垃圾），这里手动加上
          let tables = document.getElementById('readme').getElementsByTagName('table')
          for (let i = 0; i < tables.length; i++) {
            tables[i].classList.add('table-bordered')
          }
        }
      })
    });

    return {paper, funcJumpDownload}
  }
}
</script>

<style scoped>
.btn-op {
  margin: 5px;
}
</style>