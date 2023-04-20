<template>
  <div class="navbar navbar-default navbar-fixed-top menu-top" style="background: white">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <router-link to="/" class="navbar-brand" style="margin-top: 10px">
          <img src="../assets/xaudit.png" alt="logo">
        </router-link>
      </div>
      <div class="navbar-collapse collapse">
        <nav>
          <ul class="nav navbar-nav navbar-right">
            <li>
              <router-link to="/">
                {{ $t("message.navFooter.navBarHomeTitle") }}
              </router-link>
            </li>
            <li>
              <router-link to="/audit">
                {{ $t("message.navFooter.navBarAuditTitle") }}
              </router-link>
            </li>
            <!-- <li>
              <router-link to="/search?types=papers">
                {{ $t("message.navFooter.navBarPapersTitle") }}
              </router-link>
            </li> -->
<!--            <li>-->
<!--              <div class="dropdown" style="padding-top: 9px">-->
<!--                <button id="btn-product-menu" class="btn-link" data-toggle="dropdown"-->
<!--                        aria-haspopup="true" aria-expanded="true"-->
<!--                        style="font-size: 15px;font-family: Montserrat,sans-serif">-->
<!--                  {{ $t("message.navFooter.navBarProductsTitle") }}-->
<!--                  <span class="caret"></span>-->
<!--                </button>-->
<!--                <ul class="dropdown-menu" aria-labelledby="btn-product-menu">-->
<!--                  <li>-->
<!--                    <router-link to="/article/3">-->
<!--                      <b class="text-primary"><i class="fa fa-bug"></i> {{ $t("message.navFooter.menuProductsTitles[0]") }}</b>-->
<!--                      <p>{{ $t("message.navFooter.menuProductsDescriptions[0]") }}</p>-->
<!--                    </router-link>-->
<!--                  </li>-->
<!--                  <li role="separator" class="divider" style="margin-left: 10px;margin-right: 10px"></li>-->
<!--                  <li>-->
<!--                    <router-link to="/labelcloud">-->
<!--                      <b class="text-primary"><i class="fa fa-cloud"></i> {{ $t("message.navFooter.menuProductsTitles[1]") }}</b>-->
<!--                      <p>{{ $t("message.navFooter.menuProductsDescriptions[1]") }}</p>-->
<!--                    </router-link>-->
<!--                  </li>-->
<!--                </ul>-->
<!--              </div>-->
<!--            </li>-->
            <li>
              <router-link to="/about">
                {{ $t("message.navFooter.navBarAboutTitle") }}
              </router-link>
            </li>
            <span class="input-group input-small">
                <input type="text" class="form-control"
                       :placeholder="$t('message.navFooter.navBarSearchHint')"
                       v-model="keywords">
                <span class="input-group-btn">
                  <button class="btn btn-default" @click="onSearch(keywords)">
                  <i class="glyphicon glyphicon-search"></i>
                </button>
                </span>
              </span>

          </ul>
        </nav>
      </div>
    </div><!--- END CONTAINER -->
  </div>
  <slot></slot>
  <footer class="footer section-padding">
    <div class="container">
      <div class="row">
        <div class="col-sm-4 text-center wow zoomIn">
          <div class="footer_content">
            <h2 class="text-primary">{{ $t("message.navFooter.footerSitesTitle") }}</h2>
            <ul style="list-style-type:none">
              <li><a class="wow bounceInDown" href="http://inpluslab.com/" style="color: #777777">InPlusLab</a></li>
              <!--              <li><a class="wow bounceInDown" href="https://www.blockchain.com/" style="color: #777777">Blockchain</a></li>-->
              <!--              <li><a class="wow bounceInDown" href="https://cn.etherscan.com/" style="color: #777777">Etherscan</a></li>-->
              <!--              <li><a class="wow bounceInDown" href="https://peckshield.cn/" style="color: #777777">PeckShield</a></li>-->
            </ul>
          </div>

        </div><!--- END COL -->
        <div class="col-sm-4 text-center wow zoomIn">
          <div class="footer_content">
            <h2 class="text-primary">{{ $t("message.navFooter.footerContactTitle") }}</h2>
            <ul style="list-style-type:none">
              <li><span class="wow bounceInDown" href="#">
                {{ $t("message.navFooter.footerContactWeChat") }} : inpluslab
              </span></li>
              <li><span class="wow bounceInDown" data-wow-delay=".1s"
                        href="#">Email : XAudit_blockchain@yeah.net</span></li>
              <li><span class="wow bounceInDown" data-wow-delay=".2s"
                        href="#">Copyright © 2023 | XAudit</span></li>
            </ul>
          </div>

        </div><!--- END COL -->
        <div class="col-sm-4 text-center wow zoomIn">
          <div class="footer_content">
            <img src="../assets/1583841542.png" alt="" style="width: 120px;height: 150px"/>
          </div>

        </div><!--- END COL -->

      </div><!--- END ROW -->
    </div><!--- END CONTAINER -->
  </footer>

  <table class="float-btn">
    <tr>
      <td>
        <button class="btn btn-primary btn-circle"
                style="margin-bottom: 10px"
                @click="funcScrollToTop">
          <i class="fa fa-arrow-up"></i>
        </button>
      </td>
    </tr>
    <tr>
      <td>
        <button class="btn btn-primary btn-circle"
                style="margin-bottom: 10px"
                @click="funcChangeLanguageLocale((curLocale === 'en') ? 'zh_CN' : 'en')">
          {{ (curLocale === 'en') ? '中文' : 'EN' }}
        </button>
      </td>
    </tr>

  </table>
</template>

<script>
import {useRouter} from "vue-router";
import {ref, getCurrentInstance} from "vue";

export default {
  title: "NavFooter",
  setup() {
    const router = useRouter()
    const keywords = ref("")
    const onSearch = (keywords) => {
      router.push({
        path: "/search",
        query: {keywords: keywords, types: [ "papers", "articles"]}
        // query: {keywords: keywords, types: ["datasets", "papers"]}
      })
    }

    const funcScrollToTop = () => {
      window.scroll(0, 0)
    }

    const {proxy} = getCurrentInstance()
    const curLocale = ref(proxy.$root.$i18n.locale)
    const funcChangeLanguageLocale = (locale) => {
      proxy.$root.$i18n.locale = locale
      curLocale.value = locale
    }
    return {keywords, onSearch, funcScrollToTop, funcChangeLanguageLocale, curLocale}
  }
}
</script>

<style scoped>
.input-small {
  width: 200px;
  margin-top: 6px;
}

.float-btn {
  position: fixed;
  right: 3%;
  bottom: 6%;
}
</style>