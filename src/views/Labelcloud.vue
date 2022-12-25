<template>
  <NavFooter>
    <section class="contact_area section-padding" style="margin-top: 70px">
      <div class="jumbotron">
        <div class="container">
          <h1>XLabelCloud</h1>
          <p>
            <span class="col-md-6" style="padding-left: 0">
              {{ $t("message.labelcloud.labelcloudIntro") }}
            </span>
            <span class="col-md-6" style="padding-right: 0">
              <img src="../assets/img/labelcloud.png"
                   class="img-responsive img-rounded" alt=""
                   style="background: white">
            </span>
          </p>
          <a class="btn btn-primary btn-lg"
             href="/cloud" role="button"
             target="_blank"
             style="margin-right: 20px">
            {{ $t("message.labelcloud.btnOpenTitle") }}
          </a>
          <router-link class="btn btn-default btn-lg"
                       to="/dataset/26"
                       role="button"
                       style="margin-right: 20px">
            {{ $t("message.labelcloud.btnDownloadTitle") }}
          </router-link>
<!--          <a class="btn btn-default btn-lg"-->
<!--             href="#" role="button"-->
<!--             style="margin-right: 20px">-->

<!--          </a>-->
        </div>
      </div>
    </section>

    <section class="about_us section-padding" style="padding-top: 0">
      <div class="container">
        <div class="row">
          <div class="section-title text-center wow zoomIn" style="visibility: visible; animation-name: zoomIn;">
          </div>
          <div class="col-md-6 col-sm-6 col-xs-12">
            <div class="single_about_content">
              <h4>{{ $t("message.labelcloud.labelDescriptionTitle") }}</h4>
              <p>{{ $t("message.labelcloud.labelDescriptionContent1") }}</p>
              <p>{{ $t("message.labelcloud.labelDescriptionContent2") }}</p>
              <p>{{ $t("message.labelcloud.labelDescriptionContent3") }}</p>
            </div>
          </div><!--- END COL -->
          <div class="col-md-6 col-sm-6 col-xs-12">
            <div class="skills">
              <div class="progress-bar-linear">
                <p class="progress-bar-text">Token contracts (11K+)</p>
                <div class="progress-bar">
                  <span data-percent="95" style="transition: width 2s ease 0s; width: 95%;"></span>
                </div>
              </div>
              <div class="progress-bar-linear">
                <p class="progress-bar-text">Phishing (6K+)</p>
                <div class="progress-bar">
                  <span data-percent="75" style="transition: width 2s ease 0s; width: 75%;"></span>
                </div>
              </div>
              <div class="progress-bar-linear">
                <p class="progress-bar-text">Scam (3k+)</p>
                <div class="progress-bar">
                  <span data-percent="60" style="transition: width 2s ease 0s; width: 60%;"></span>
                </div>
              </div>
              <div class="progress-bar-linear">
                <p class="progress-bar-text">Exchange (0.39K)</p>
                <div class="progress-bar">
                  <span data-percent="25" style="transition: width 2s ease 0s; width: 25%;"></span>
                </div>
              </div>
            </div>
          </div><!--- END COL -->
        </div><!--- END ROW -->
      </div><!--- END CONTAINER -->
    </section>
    <section class="comment bg-primary" style="padding: 5px; margin-top: 30px">
      <div class="container text-center">
        <h3>{{ $t("message.labelcloud.barAccessTitle") }}
          <a href="/cloud" target="_blank"
             class="btn btn-default btn-promotion-bg">
            {{ $t("message.labelcloud.btnAccessTitle") }}
          </a>
        </h3>
      </div>
    </section>
  </NavFooter>
</template>

<script>
import NavFooter from "../components/NavFooter.vue";

export default {
  name: "Labelcloud",
  components: {NavFooter},
  setup() {

  }
}
</script>

<style scoped>

</style>