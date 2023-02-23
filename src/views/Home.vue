<template>
  <NavFooter>
    <div class="container" style="margin-top: 150px;margin-bottom: 50px">
      <div class="row">
        <div class="col-md-12" style="display: flex; justify-content: center; align-items: center; height: 100%;">
          <div class="col-md-6 text-center">
            <img src="../assets/XAudit_home.png" alt="" style="width: 80%;height: 80%">
          </div>
          <div class="col-md-6 pull-left" style="display: flex; flex-direction: column; height: 100%;">
<!--            <h3>e<span class="text-primary">X</span>plore <span class="text-primary">Block</span>chain-->
<!--              Reliability</h3>-->
<!--            <h1>XBLOCK.PRO</h1>-->
            <h1>XAudits</h1>
            <h1>Smart Contracts Security</h1>
            <h1>Guard</h1>
            <span class="btn-op">
              <router-link to="/audit">
              <JumpButton
                  :color="'btn-primary'"
                  :func-jump="''"
                  :info="$t('message.home.setStartButton')"
                  style="margin-right: 5px"
              ></JumpButton>
              </router-link>
            </span>
<!--            <p style="margin-top: 30px">{{ $t("message.home.introduction1") }}</p>-->
<!--            <p style="margin-top: 30px">{{ $t("message.home.introduction2") }}</p>-->
          </div>
        </div>
      </div>
    </div>
    <!--    <hr style="margin: 18px">-->
    <section class="counter_feature">
      <div class="container">
        <div class="row text-center">
          <div class="section-title wow zoomIn">
            <h2><span>{{ $t("message.home.setAchievementsTitle") }}</span></h2>
            <div></div>
          </div>
          <div class="col-md-3 col-sm-6 col-xs-12 wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0" style="visibility: visible; animation-duration: 1s; animation-delay: 0.2s; animation-name: fadeInLeft;">
            <div class="counter">
              <i class="fa fa-check"></i>
              <h2 class="timer">3TB+</h2>
              <div><b>{{ $t("message.home.secStatisticsDataset") }}</b></div>
            </div>
          </div> <!--- END COL -->
          <div class="col-md-3 col-sm-6 col-xs-12 wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s" data-wow-offset="0" style="visibility: visible; animation-duration: 1s; animation-delay: 0.3s; animation-name: fadeInLeft;">
            <div class="counter">
              <i class="fa fa-check"></i>
              <h2 class="timer">60+</h2>
              <div><b>{{ $t("message.home.secStatisticsPapers") }}</b></div>
            </div>
          </div><!--- END COL -->
          <div class="col-md-3 col-sm-6 col-xs-12 wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.4s" data-wow-offset="0" style="visibility: visible; animation-duration: 1s; animation-delay: 0.4s; animation-name: fadeInLeft;">
            <div class="counter">
              <i class="fa fa-check"></i>
              <h2 class="timer">8,000+</h2>
              <div><b>{{ $t("message.home.secStatisticsCites") }}</b></div>
            </div>
          </div> <!--- END COL -->
          <div class="col-md-3 col-sm-6 col-xs-12 wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.5s" data-wow-offset="0" style="visibility: visible; animation-duration: 1s; animation-delay: 0.5s; animation-name: fadeInLeft;">
            <div class="counter">
              <i class="fa fa-check"></i>
              <h2 class="timer">34,000+</h2>
              <div><b>{{ $t("message.home.secStatisticsVulnerabilities") }}</b></div>
            </div>
          </div> <!--- END COL -->
        </div><!--- END ROW -->
      </div><!--- END CONTAINER -->
    </section>

    <section class="about_us section-padding">
      <div class="container">
        <div class="row">
          <div class="section-title wow zoomIn text-center">
            <h2><span>{{ $t("message.home.setHomeTextTitle0") }}</span></h2>

            <div></div>
          </div>
          <div class="col-md-12">
            <div class="row">
              <div class="col-md-6">
                <div class="about-item">
                  <h3 class="about-item__title">{{ $t("message.home.setHomeTextSubtitle0") }}</h3>
                  <p class="about-item__text">{{ $t("message.home.setHomeTextContent0") }}</p>
                </div>
                <div class="about-item">
                  <h3 class="about-item__title">{{ $t("message.home.setHomeTextSubtitle2") }}</h3>
                  <p class="about-item__text">{{ $t("message.home.setHomeTextContent2") }}</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="about-item">
                  <h3 class="about-item__title">{{ $t("message.home.setHomeTextSubtitle1") }}</h3>
                  <p class="about-item__text">{{ $t("message.home.setHomeTextContent1") }}</p>
                </div>
                <div class="about-item">
                  <h3 class="about-item__title">{{ $t("message.home.setHomeTextSubtitle3") }}</h3>
                  <p class="about-item__text">{{ $t("message.home.setHomeTextContent3") }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="counter_feature">
      <div class="container">
        <div class="row">
          <div class="section-title wow zoomIn text-center">
            <h2><span>{{ $t("message.home.setHomeTextSubtitle4") }}</span></h2>
            <div></div>
          </div>
          <div class="col-md-12" style="display: flex; justify-content: center; align-items: center; height: 100%;">
            <div class="col-md-6 text-center">
              <img src="../assets/publication.jpg" alt="" style="width: 100%;height: 100%">
            </div>
            <div class="col-md-6 pull-left" style="display: flex; flex-direction: column; height: 100%;">
              <h3 class="about-item__title">
                <span>{{ $t("message.home.setHomeTextContent4") }}</span>
              </h3>
              <p class="about-item_publications_text">
                <span>{{ $t("message.home.setHomeTextContent7") }}</span>
              </p>
              <p class="about-item_publications_text">
                <span>{{ $t("message.home.setHomeTextContent8") }}</span>
              </p>
              <p class="about-item_publications_text">
                <span>{{ $t("message.home.setHomeTextContent9") }}</span>
              </p>
              <p class="about-item_publications_text">
                <span>......</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="about_us section-padding">
      <div class="container">
        <div class="row text-center">
          <div class="section-title wow zoomIn">
            <h2><span>{{ $t("message.home.setOurPartners") }}</span></h2>
            <div></div>
          </div>

          <div class="section-subtitle wow zoomIn">
            <h3 class="about_us__subtitle"><span>{{ $t("message.home.setOurPartnersContent") }}</span></h3>
          </div>

<!--          <div class="text-center">-->
<!--            <img src="../assets/partners/WeBankLogo.png" alt="WeBank Logo" class="about_us__logo">-->
<!--          </div>-->

          <div class="col-md-12" style="display: flex; justify-content: space-between;">
            <div class="col-md-3 text-center" style="display: flex; justify-content: space-between; align-self:center">
              <img src="../assets/partners/antlogo.png" alt="Partner" class="about_us__partner" style="width: 100%;">
            </div>
            <div class="col-md-3 text-center" style="display: flex; justify-content: space-between; align-self:center">
              <img src="../assets/partners/huaweilogo.png" alt="Partner" class="about_us__partner" style="width: 100%;">
            </div>
            <div class="col-md-3 text-center" style="display: flex; justify-content: space-between; align-self:center">
              <img src="../assets/partners/WeBankLogo.png" alt="Partner" class="about_us__partner" style="width: 100%;">
            </div>
            <div class="col-md-3 text-center" style="display: flex; justify-content: space-between; align-self:center">
              <img src="../assets/partners/tencentlogo.jpg" alt="Partner" class="about_us__partner" style="width: 100%;">
            </div>
          </div>
        </div>
      </div>
    </section>
  </NavFooter>
</template>

<script>
import NavFooter from "../components/NavFooter.vue";
import {reactive} from "vue";
import confs from "../confs";
import {useRouter} from "vue-router";
import JumpButton from "../components/buttons/JumpButton.vue";

export default {
  title: "Home",
  components: {NavFooter, JumpButton},
  setup() {
    // const {proxy} = getCurrentInstance()
    // console.log(proxy)
    // console.log(proxy.$root.$i18n.locale="zh_CN")

    const router = useRouter()

    const funcJumpItem = (dtype, id) => {
      router.push({path: "/" + dtype + "/" + id})
    }

    return {funcJumpItem}
  }
}
</script>

<style scoped>
.bg-white {
  background: url(src/assets/bg_white.png) scroll 0 0;
  background-size: cover;
}

.pointer {
  cursor: pointer;
}

/* Our Advantage*/
.about-item {
  margin-bottom: 50px;
  text-align: left;
}

.about-item__title {
  color: #555;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.3;
  margin: 0 0 10px;
}

.about-item__text {
  color: #888;
  font-size: 16px;
  line-height: 1.6;
  margin: 0;
}

.about-item_publications_text {
  color: #888;
  font-size: 16px;
  line-height: 1.6;
  margin: 10px;
}

@media (max-width: 767px) {
  .about-item {
    margin-bottom: 30px;
  }

  .about-item__title {
    font-size: 20px;
  }

  .about-item__text {
    font-size: 14px;
  }
}

/* Our Partners*/
.about_us__subtitle {
  font-size: 24px;
  margin-bottom: 50px;
  color: #555;
  font-weight: 700;
  line-height: 1.3;
}

.about_us__logo {
  width: 30%;
  height: auto;
  margin-bottom: 50px;
}

.about_us__partner {
  width: 70%;
  height: auto;
  margin-bottom: 20px;
}

</style>