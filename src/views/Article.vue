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
                  {{ article.title }}
                </h3>
              </div>
              <p>{{ article.introduction }}</p>
              <div class="row">
                <div class="col-md-12">
                  <button type="button" class="btn btn-tag btn-primary btn-xs pull-left"
                          style="margin: 2px"
                          v-for="category in article.categories">
                    {{ category }}
                  </button>
                </div>
              </div>
            </div>
          </div><!-- END COL -->
        </div><!--- END ROW -->
      </div><!--- END CONTAINER -->

      <div :class="article.readme===''? 'hidden':''" style="background: #f7f7f7">
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
import CommentArea from "../components/CommentArea.vue";
import {useRouter} from "vue-router";
import {onMounted, reactive, ref} from "vue";
import confs from "../confs";

export default {
  title: "Article",
  components: {NavFooter, CommentArea},
  setup() {
    const router = useRouter()
    const artID = router.currentRoute.value.params.id

    const article = reactive({
      title: "",
      introduction: "",
      readme: "",
      categories: [],
    })
    // const funcDownloadRecord = () => {
    //   $.ajax({
    //     url: confs.backendsURL + "/api/info/article/download/record",
    //     type: "GET",
    //     data: {"id": artID},
    //     traditional: true,
    //   })
    // }
    onMounted(() => {
      $.ajax({
        url: confs.backendsURL + "/api/info/article",
        type: "GET",
        data: {"id": artID},
        traditional: true,
        success: (rsp) => {
          let data = rsp.data
          article.title = data.title
          article.introduction = data.introduction
          article.upTime = data.uptime
          if (data.categories) {
            for (let c of data.categories) {
              article.categories.push(c.name)
            }
          }
          article.readme = data.readme

          // marked代码高亮
          marked.setOptions({
            highlight: function(code) {
              return hljs.highlightAuto(code).value;
            },
          })
          document.getElementById('readme').innerHTML = marked(article.readme)

          // marked渲染的表格没边框（真的垃圾），这里手动加上
          let tables = document.getElementById('readme').getElementsByTagName('table')
          for (let i = 0; i < tables.length; i++) {
            tables[i].classList.add('table-bordered')
          }
        }
      })
    });
    return {artID, article}
  }
}
</script>

<style scoped>

</style>