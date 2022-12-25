<template>
  <NavFooter>
    <section class="contact_area section-padding" style="margin-top: 70px">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-sm-6 col-xs-12 wow fadeInUp">
            <div class="contact_address">
              <h3>{{ $t("message.about.contactTitle") }}</h3>
              <p>{{ $t("message.about.contactIntro") }}</p>
              <ul>
                <li><i class="fa fa-wechat"></i>WeChat Official Account : inpluslab</li>
                <li><i class="fa fa-envelope"></i>xblock_blockchain@yeah.net</li>
              </ul>
            </div>
          </div><!-- END COL -->
          <div class="col-md-6 col-sm-6 col-xs-12 wow fadeInUp">
            <div class="contact_address">
              <h3>{{ $t("message.about.aboutTitle") }}</h3>
              <p>{{ $t("message.about.aboutIntro1") }}</p>
              <p>{{ $t("message.about.aboutIntro2") }}</p>
            </div>
          </div><!-- END COL -->
        </div><!--- END ROW -->
      </div><!--- END CONTAINER -->
    </section>
    <section class="our_team section-padding" style="background:#f7f7f7">
      <div class="container">
        <div class="row text-center">
          <div class="section-title wow zoomIn">
            <h2><span>{{ $t("message.about.secMemberTitle") }}</span></h2>
            <div></div>
          </div>
          <div class="row">
            <div class="col-md-4 col-sm-6">
              <div class="single_team">
                <div class="img_wrap">
                  <img src="../assets/img/team/1.png" class="img-responsive" alt="" style="margin: 0 auto"/>
                </div>
                <h3>{{ $t("message.about.secMembers[0].name") }}</h3>
                <p>{{ $t("message.about.secMembers[0].org") }}</p>
              </div>
            </div> <!-- End Col -->
            <div class="col-md-4 col-sm-6">
              <div class="single_team">
                <div class="img_wrap">
                  <img src="../assets/img/team/2.png" class="img-responsive head-img" alt=""/>
                </div>
                <h3>{{ $t("message.about.secMembers[1].name") }}</h3>
                <p>{{ $t("message.about.secMembers[1].org") }}</p>
              </div>
            </div> <!-- End Col -->
            <div class="col-md-4 col-sm-6">
              <div class="single_team">
                <div class="img_wrap">
                  <img src="../assets/img/team/3.png" class="img-responsive head-img" alt=""/>
                </div>
                <h3>{{ $t("message.about.secMembers[2].name") }}</h3>
                <p>{{ $t("message.about.secMembers[2].org") }}</p>
              </div>
            </div> <!-- End Col -->
          </div>

          <div class="row">
            <!--            <div class="col-md-3 col-sm-6">-->
            <!--              <div class="single_team">-->
            <!--                <div class="img_wrap">-->
            <!--                  <img src="../assets/img/team/5.jpg" class="img-responsive head-img" alt=""/>-->
            <!--                </div>-->
            <!--                <h3>Liang Chen</h3>-->
            <!--                <p>Sun Yat-sen University</p>-->
            <!--              </div>-->
            <!--            </div> &lt;!&ndash; End Col &ndash;&gt;-->
            <!--            <div class="col-md-3 col-sm-6">-->
            <!--              <div class="single_team">-->
            <!--                <div class="img_wrap">-->
            <!--                  <img src="../assets/img/team/6.jpg" class="img-responsive head-img" alt=""/>-->
            <!--                </div>-->
            <!--                <h3>Wuhui Chen</h3>-->
            <!--                <p>Sun Yat-sen University</p>-->
            <!--              </div>-->
            <!--            </div> &lt;!&ndash; End Col &ndash;&gt;-->
            <div class="col-md-4 col-sm-6">
              <div class="single_team">
                <div class="img_wrap">
                  <img src="../assets/img/team/huangyuan.jpg" class="img-responsive head-img" alt=""/>
                </div>
                <h3>{{ $t("message.about.secMembers[3].name") }}</h3>
                <p>{{ $t("message.about.secMembers[3].org") }}</p>
              </div>
            </div> <!-- End Col -->

            <div class="col-md-4 col-sm-6">
              <div class="single_team">
                <div class="img_wrap">
                  <img src="../assets/img/team/zhangneng.jpg" class="img-responsive head-img" alt=""/>
                </div>
                <h3>{{ $t("message.about.secMembers[4].name") }}</h3>
                <p>{{ $t("message.about.secMembers[4].org") }}</p>
              </div>
            </div> <!-- End Col -->

            <div class="col-md-4 col-sm-6">
              <div class="single_team">
                <div class="img_wrap">
                  <img src="../assets/img/team/chenjiachi.jpg" class="img-responsive head-img" alt=""/>
                </div>
                <h3>{{ $t("message.about.secMembers[5].name") }}</h3>
                <p>{{ $t("message.about.secMembers[5].org") }}</p>
              </div>
            </div> <!-- End Col -->
          </div>
          <div class="row">
            <div class="col-md-4 col-sm-6">
              <div class="single_team">
                <div class="img_wrap">
                  <img src="../assets/img/team/zhengpeilin.jpg" class="img-responsive head-img" alt=""/>
                </div>
                <h3>{{ $t("message.about.secMembers[6].name") }}</h3>
                <p>{{ $t("message.about.secMembers[6].org") }}</p>
              </div>
            </div> <!-- End Col -->
          </div>
        </div>
      </div>
    </section>

    <div class="container" style="padding: 60px">
      <div class="row">
        <div class="section-title wow zoomIn">
          <h2 class="text-center">{{ $t("message.about.secIssueTitle") }}</h2>
          <div></div>
        </div>
        <ol class="col-md-12">
          <li>
            <a href="http://www.ieee-ies.org/images/files/tii/ss/2018/Blockchain-for-Industrial-IoT-2018-4-25-extended.pdf"
               target="_blank" rel="noopener">IEEE Transactions on Industrial Informatics, Special Issues on Blockchain
              for
              IoT</a>, Deadline: Oct. 31, 2018.
          </li>
          <li>
            <a href="https://onlinelibrary.wiley.com/pb-assets/assets/1097024X/SPE-SI-Blockchain2019.pdf"
               target="_blank"
               rel="noopener">Software: Practice and Experience, Special Issues on Blockchain and Decentralized
              Applications</a>, Deadline: Mar. 31, 2019.
          </li>
          <li><a href="https://www.computer.org/digital-library/journals/sc/blockchain-based-services-computing"
                 target="_blank"
                 rel="noopener">IEEE Transactions on Services Computing, Special Issues on Blockchain-Based Services
            Computing</a>, Deadline: Mar. 31, 2019.
          </li>
          <li><a
              href="https://www.computer.org/digital-library/journals/ec/call-for-papers-ieee-transactions-on-emerging-topics-in-computing-special-section-on-scalable-computing-for-blockchain-systems"
              target="_blank" rel="noopener">IEEE Transactions on Emerging Topics in Computing, Special Issues on
            Scalable
            Computing for Blockchain Systems</a>, Deadline: Dec. 01, 2019.
          </li>
          <li><a
              href="http://www.cic-chinacommunications.cn/EN/column/item140.shtml" target="_blank" rel="noopener">China
            Communication, Special Issues on Blockchain for Internet of Things</a>, Deadline: Feb. 15, 2020.
          </li>
          <li><a
              href="https://ieeeaccess.ieee.org/special-sections/blockchain-enabled-trustworthy-systems/"
              target="_blank"
              rel="noopener">IEEE Access, Special Issues on Blockchain-Enabled Trustworthy Systems</a>, Deadline: Apr.
            01,
            2020.
          </li>
          <li><a href="http://xblock.pro/Blockchain-for-Vehicles-and-Intelligent-Communications.pdf"
                 target="_blank"
                 rel="noopener">IEEE Transactions on Vehicular Technology, Special Issues on Blockchain for
            Vehicles
            and Intelligent Communications,</a> Deadline: Jul. 01, 2020.
          </li>
          <li><a
              href="http://www.ieee-ies.org/images/files/tii/ss/2020/Blockchain_Solutions_for_Industrial_Internet_of_Things_2020-1-22.pdf"
              target="_blank" rel="noopener">IEEE Transactions on Industrial Informatics, Special Issues on Blockchain
            Solutions for Industrial Internet of Things</a>, Deadline: Jul. 30, 2020.
          </li>
          <li><a
              href="http://xblock.pro/CFP-BlockchainIntelligence-OJ-CS.txt" target="_blank" rel="noopener">IEEE OJ-CS ,
            Special Issues on Blockchain Intelligence: Technologies and Applications</a>, Deadline: Sep. 15, 2020.
          </li>
          <li><a
              href="https://www.mdpi.com/journal/sensors/special_issues/Blockchain_Trustworthy_IoT" target="_blank"
              rel="noopener">Sensors , Special Issues on Blockchain for Trustworthy Internet of Things</a>, Deadline:
            Feb. 15, 2021.
          </li>
          <li><a href="https://mp.weixin.qq.com/s/_UtA8G_LsrACEiOEvTql6Q">《计算机科学》，区块链技术及前沿应用</a>，Deadline:
            Jun. 30, 2021.
          </li>
          <li><a href="https://www.tandfonline.com/action/newsAndOffers?journalCode=ccos20">Connection Science, Special
            Issue on Blockchain-enabled Smart Contract: Technologies and Applications</a>, Deadline: Sept. 15, 2021.
          </li>
          <li><a href="https://www.mdpi.com/journal/sensors/special_issues/Blockchain_Trustworthy_IoT">Sensors, Special
            Issue on Blockchain for Trustworthy Internet of Things</a>, Deadline: Dec. 31, 2021.
          </li>
          <li><a
              href="http://www.ieee-ies.org/images/files/tii/ss/2021/Next_Generation_Blockchain_Technology_with_Industrial_IoT_in_Industry_40.pdf">IEEE
            Transactions on Industrial Informatics, Special Section on Next Generation Blockchain Technology with
            Industrial IoT in Industry 4.0</a>, Deadline: Dec. 31, 2021.
          </li>
          <li><a href="https://www.springer.com/journal/11280">World Wide Web - Internet and Web Information Systems,
            Special Issues on Web-based Intelligent Financial Services</a>, Deadline: Feb 1, 2022.
          </li>
          <li><a
              href="https://www.comsoc.org/publications/journals/ieee-jsac/cfp/intelligent-blockchain-future-communications-and-networking">IEEE
            Journal on Selected Areas in Communications, Speical Issues on Intelligent Blockchain for Future
            Communications and Networking: Technologies, Trends and Applications</a>, Deadline: Feb. 15, 2022.
          </li>
          <li><a href="https://www.computer.org/digital-library/journals/oj/cfp-blockchain-ai-metaverse">IEEE OJ-CS,
            Special Issue on Fusing Blockchain and AI with Metaverse: Technologies, Trends, and Applications</a>,
            Deadline: May. 15, 2022.
          </li>
          <li><a href="https://mp.weixin.qq.com/s/NROu9wkwKXXD4Jd91KmJow">《计算机工程》，区块链理论与技术</a>, Deadline: Mar. 31, 2022.
          </li>
          <li><a href="https://mp.weixin.qq.com/s/DbnY2NprWUgnytAxWpcvpA">Applied Sciences, Special Issue on Advances in Blockchain-enabled Internet of Things (IoT)
          </a>, Deadline: Aug. 31, 2022.</li>
        </ol>
      </div>
    </div>

    <div class="container" style="padding: 60px">
      <div class="row">
        <div class="section-title wow zoomIn">
          <h2 class="text-center">{{ $t("message.about.secConferencesTitle") }}</h2>
          <div></div>
        </div>
        <ol>
          <li><a href="http://blocksys.info/2019/">1st International Conference on
            Blockchain and Trustworthy Systems (BlockSys'19)</a>, Deadline: Sept. 30, 2019.
          </li>
          <li><a
              href="http://blocksys.info/2020/">2nd International Conference on Blockchain and Trustworthy Systems
            (BlockSys'20)</a>, Deadline: Jun. 01, 2020.
          </li>
          <li><a href="http://blocksys.info/2021/">3rd International
            Conference on Blockchain and Trustworthy Systems (BlockSys'21)</a>, Deadline: Mar. 20, 2021.
          </li>
          <li><a href="http://blocksys.info/2022/">4th International Conference on Blockchain and Trustworthy Systems
            (BlockSys'22)</a>, Deadline: Mar. 15, 2022.
          </li>
          <li><a href="https://conferences.computer.org/services/2021/programs/blk_program.html">
            2021 IEEE International Symposium on Blockchain
          </a>, Date: Sept. 6-8, 2021.
          </li>
          <li><a href="https://conferences.computer.org/smds/2021/">
            2021 IEEE International Conference on Smart Data Services (IEEE SMDS 2021)
          </a>, Date: Sept. 5-11, 2021.
          </li>
          <li><a href="http://inpluslab.com/icss2022/">
            CCF 15th International Conference on Service Science (CCF ICSS 2022)
          </a>, Deadline: Mar. 15, 2022.
          </li>
        </ol>
      </div>
    </div>

    <div class="container" style="padding: 60px">
      <div class="row">
        <div class="section-title wow zoomIn">
          <h2 class="text-center">{{ $t("message.about.secSupportTitle") }}</h2>
          <div></div>
        </div>
        <div v-html="$t('message.about.secSupport')"
             class="text-center"></div>
      </div>
    </div>
  </NavFooter>
</template>

<script>
import NavFooter from "../components/NavFooter.vue";

export default {
  title: "About",
  components: {NavFooter}
}
</script>

<style scoped>
.head-img {
  width: 147px;
  height: 147px;
  margin: 0 auto
}
</style>