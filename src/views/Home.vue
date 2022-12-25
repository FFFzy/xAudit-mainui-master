<template>
  <NavFooter>
    <div class="container" style="margin-top: 150px;margin-bottom: 50px">
      <div class="row">
        <div class="col-md-12">
          <div class="col-md-6 text-center">
            <img src="../assets/XAudit_home.png" alt="" style="width: 80%;height: 80%">
          </div>
          <div class="col-md-6 pull-left">
<!--            <h3>e<span class="text-primary">X</span>plore <span class="text-primary">Block</span>chain-->
<!--              Reliability</h3>-->
<!--            <h1>XBLOCK.PRO</h1>-->
            <h1>XAudits</h1>
            <h1>Smart Contracts Security</h1>
            <h1>Guard</h1>
            <span class="btn-op">
              <JumpButton
                  :color="'btn-primary'"
                  :func-jump="''"
                  :info="$t('message.home.setStartButton')"
                  style="margin-right: 5px"
              ></JumpButton>
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
          <div class="section-title wow zoomIn">
            <h2><span>{{ $t("message.home.setHomeTextTitle0") }}</span></h2>
            <h2><span>{{ $t("message.home.setHomeTextTitle1") }}</span></h2>
          </div>
          <div class="row"></div>
          <div class="col-md-12">
            <div class="col-md-6 pull-left">
              <h3>
                <span>{{ $t("message.home.setHomeTextSubtitle0") }}</span>
              </h3>
              <h5>
                <span>{{ $t("message.home.setHomeTextContent0") }}</span>
              </h5>
              <div class="row"></div>
              <h3>
                <span>{{ $t("message.home.setHomeTextSubtitle2") }}</span>
              </h3>
              <h5>
                <span>{{ $t("message.home.setHomeTextContent2") }}</span>
              </h5>
            </div>
            <div class="col-md-6 pull-left">
              <h3>
                <span>{{ $t("message.home.setHomeTextSubtitle1") }}</span>
              </h3>
              <h5>
                <span>{{ $t("message.home.setHomeTextContent1") }}</span>
              </h5>
              <div class="row"></div>
              <h3>
                <span>{{ $t("message.home.setHomeTextSubtitle3") }}</span>
              </h3>
              <h5>
                <span>{{ $t("message.home.setHomeTextContent3") }}</span>
              </h5>
            </div>
          </div>

        </div><!--- END ROW -->
      </div><!--- END CONTAINER -->
    </section>

    <section class="counter_feature">
      <div class="container" style="margin-top: 150px;margin-bottom: 50px">
        <div class="row">
          <div class="col-md-12">
            <div class="col-md-6 text-center">
              <img src="../assets/home_temp.png" alt="" style="width: 80%;height: 80%">
            </div>
            <div class="col-md-6 pull-left">
              <h3>
                <span>{{ $t("message.home.setHomeTextSubtitle4") }}</span>
              </h3>
              <h5>
                <span>{{ $t("message.home.setHomeTextContent4") }}</span>
              </h5>
              <h5>
                <span>{{ $t("message.home.setHomeTextContent5") }}</span>
              </h5>
              <h5>
                <span>{{ $t("message.home.setHomeTextContent6") }}</span>
              </h5>
              <h5>
                <span>......</span>
              </h5>
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

          <div class="section-title wow zoomIn">
            <h3><span>{{ $t("message.home.setOurPartnersContent") }}</span></h3>
          </div>

          <div class="text-center">
            <img src="../assets/WeBankLogo.png" alt="" style="width: 30%;height: 30%">
          </div>

          <div class="col-md-12">
            <div class="col-md-3 text-center">
              <img src="../assets/partner_temp.png" alt="" style="width: 70%;height: 70%">
            </div>
            <div class="col-md-3 text-center">
              <img src="../assets/partner_temp.png" alt="" style="width: 70%;height: 70%">
            </div>
            <div class="col-md-3 text-center">
              <img src="../assets/partner_temp.png" alt="" style="width: 70%;height: 70%">
            </div>
            <div class="col-md-3 text-center">
              <img src="../assets/partner_temp.png" alt="" style="width: 70%;height: 70%">
            </div>
          </div>
        </div><!--- END ROW -->
      </div><!--- END CONTAINER -->
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
</style>