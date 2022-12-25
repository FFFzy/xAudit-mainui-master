<template>
  <div class="jumbotron">
    <div class="container">
      <h1>{{ $t("message.downloader.downloadTitle") }}</h1>
      <p>{{ $t("message.downloader.downloadIntro1") }}</p>
      <p>{{ $t("message.downloader.downloadIntro2") }}</p>
      <p><a class="btn btn-primary btn-lg" role="button"
            :class="(!isAllowRestart)? 'disabled':null"
            @click="funcRestart()">
        {{ $t("message.downloader.btnRestart") }}
      </a></p>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="progress-bar">
        <span :style="{ width: info[curStep].rate + '%'}">
          {{ info[curStep].rate }}%
        </span>
      </div>
    </div>
    <div class="row">
      <p>{{ info[curStep].message }}</p>
    </div>
  </div>
  <a href="javascript:void(0)" class="hidden" ref="openDownloader"></a>
</template>

<script>
import {reactive, ref} from "vue"
import {useRouter} from "vue-router";
import confs from "../confs";

export default {
  title: "IPFSDownloader",
  props: {
    cid: {
      type: String,
      default: null
    },
    gateways: {
      type: Array,
      default() {
        return [
          "https://ipfs.io/ipfs/:hash",
          "https://dweb.link/ipfs/:hash",
          "https://gateway.ipfs.io/ipfs/:hash",
          "https://ipfs.infura.io/ipfs/:hash",
          "https://ninetailed.ninja/ipfs/:hash",
          "https://ipfs.globalupload.io/:hash",
          "https://10.via0.com/ipfs/:hash",
          "https://ipfs.eternum.io/ipfs/:hash",
          "https://hardbin.com/ipfs/:hash",
          "https://gateway.blocksec.com/ipfs/:hash",
          "https://cloudflare-ipfs.com/ipfs/:hash",
          // "https://astyanax.io/ipfs/:hash",
          "https://cf-ipfs.com/ipfs/:hash",
          "https://ipns.co/ipfs/:hash",
          "https://ipfs.mrh.io/ipfs/:hash",
          "https://gateway.originprotocol.com/ipfs/:hash",
          "https://gateway.pinata.cloud/ipfs/:hash",
          "https://ipfs.doolta.com/ipfs/:hash",
          "https://ipfs.sloppyta.co/ipfs/:hash",
          "https://ipfs.busy.org/ipfs/:hash",
          "https://ipfs.greyh.at/ipfs/:hash",
          "https://gateway.serph.network/ipfs/:hash",
          "https://jorropo.ovh/ipfs/:hash",
          "https://jorropo.net/ipfs/:hash",
          "https://gateway.temporal.cloud/ipfs/:hash",
          "https://ipfs.fooock.com/ipfs/:hash",
          "https://cdn.cwinfo.net/ipfs/:hash",
          "https://ipfs.privacytools.io/ipfs/:hash",
          "https://permaweb.io/ipfs/:hash",
          "https://ipfs.stibarc.com/ipfs/:hash",
          "https://ipfs.best-practice.se/ipfs/:hash",
          "https://2read.net/ipfs/:hash",
          "https://ipfs.2read.net/ipfs/:hash",
          "https://storjipfs-gateway.com/ipfs/:hash",
          "https://ipfs.runfission.com/ipfs/:hash",
          "https://trusti.id/ipfs/:hash",
          "https://apac.trusti.id/ipfs/:hash",
          "https://ipfs.overpi.com/ipfs/:hash",
          "https://gateway.ipfs.lc/ipfs/:hash",
          "https://ipfs.leiyun.org/ipfs/:hash",
          "https://ipfs.ink/ipfs/:hash",
          "https://ipfs.oceanprotocol.com/ipfs/:hash",
          "https://d26g9c7mfuzstv.cloudfront.net/ipfs/:hash",
          "https://ipfsgateway.makersplace.com/ipfs/:hash",
          "https://gateway.ravenland.org/ipfs/:hash",
          "https://ipfs.funnychain.co/ipfs/:hash",
          "https://ipfs.telos.miami/ipfs/:hash",
          "https://robotizing.net/ipfs/:hash",
          "https://ipfs.mttk.net/ipfs/:hash",
          "https://ipfs.fleek.co/ipfs/:hash",
          "https://ipfs.jbb.one/ipfs/:hash",
          "https://ipfs.yt/ipfs/:hash",
          "https://jacl.tech/ipfs/:hash",
          "https://hashnews.k1ic.com/ipfs/:hash",
          "https://ipfs.vip/ipfs/:hash",
          "https://ipfs.k1ic.com/ipfs/:hash",
          "https://ipfs.drink.cafe/ipfs/:hash",
          "https://ipfs.azurewebsites.net/ipfs/:hash",
          "https://gw.ipfspin.com/ipfs/:hash",
          "https://ipfs.kavin.rocks/ipfs/:hash",
          "https://ipfs.denarius.io/ipfs/:hash",
          "https://ipfs.mihir.ch/ipfs/:hash",
          "https://bluelight.link/ipfs/:hash",
          "https://crustwebsites.net/ipfs/:hash",
          "https://trusted-setup.filecoin.io/ipfs/:hash",
          "http://3.211.196.68:8080/ipfs/:hash",
          "https://ipfs0.sjc.cloudsigma.com/ipfs/:hash",
          "https://ipfs-tezos.giganode.io/ipfs/:hash",
          "http://183.252.17.149:82/ipfs/:hash",
          "http://ipfs.genenetwork.org/ipfs/:hash",
          "https://ipfs.eth.aragon.network/ipfs/:hash",
          "https://ipfs.smartholdem.io/ipfs/:hash",
          "https://bin.d0x.to/ipfs/:hash",
          "https://ipfs.xoqq.ch/ipfs/:hash",
          "https://birds-are-nice.me/ipfs/:hash",
          "http://natoboram.mynetgear.com:8080/ipfs/:hash",
          "https://ipfs.foxgirl.dev/ipfs/:hash",
          "https://video.oneloveipfs.com/ipfs/:hash",
          "http://ipfs.anonymize.com/ipfs/:hash",
          "https://ipfs.noormohammed.tech/ipfs/:hash",
          "https://ipfs.taxi/ipfs/:hash",
          "https://ipfs.scalaproject.io/ipfs/:hash",
          "https://search.ipfsgate.com/ipfs/:hash",
          "https://ipfs.itargo.io/ipfs/:hash",
          "https://ipfs.decoo.io/ipfs/:hash"
        ]
      }
    }
  },
  setup(props) {
    let router = useRouter();
    if (props.cid == null) {
      router.push('/')
    }

    // 施法未完成之前禁用restart
    const isAllowRestart = ref(false)

    // 开启网关测试
    let timeout = 10
    let startTime = new Date().getTime()
    let availableGateways = []
    for (let i = 0; i < props.gateways.length; i++) {
      let url = props.gateways[i].replace(":hash", props.cid)
      $.ajax({
        url: url,
        headers: {
          Range: "bytes=0-100"
        },
        timeout: timeout * 1000,
        success(data, _, xhr) {
          let contentLen = xhr.getResponseHeader('Content-length')
          if (contentLen && contentLen > 0) {
            availableGateways.push({
              url: $(this)[0].url,
              latency: new Date().getTime() - startTime
            })
          }
        }
      })
    }

    // 给所有网关的响应速度排序
    setTimeout(function () {
      availableGateways.sort(function (a, b) {
        return (a.latency > b.latency) ? 1 : -1;
      })
      console.log('--------------------')
      console.log(availableGateways[0])
    }, timeout * 1000)

    // 进度条显示
    const openDownloader = ref()
    let interval = 1
    const curStep = ref(0)
    const info = reactive([
      {message: "Starting downloader", rate: 10},
      {message: "Starting downloader", rate: 20},
      {message: "Starting downloader", rate: 30},
      {message: "Enable P2P acceleration", rate: 40},
      {message: "Enable P2P acceleration", rate: 50},
      {message: "Enable P2P acceleration", rate: 60},
      {message: "Looking for available gateways", rate: 70},
      {message: "Looking for available gateways", rate: 80},
      {message: "Looking for available gateways", rate: 90},
      {message: "Start Downloading task soon", rate: 100},
    ])

    setInterval(() => {
      if (curStep.value === info.length - 1) {
        return
      }
      curStep.value += 1

      if (curStep.value === info.length - 1) {
        if (availableGateways.length === 0) {
          info[curStep.value].message = "No gateway available, try refreshing the page to solve this problem "
          isAllowRestart.value = true
        }

        // 启动ipfs下载
        openDownloader.value.href = availableGateways[0].url
        openDownloader.value.click()

        // 允许restart
        isAllowRestart.value = true
        clearInterval(this)
      }
    }, interval * 1000)

    // 直接下载按钮
    const funcRestart = () => {
      openDownloader.value.href = confs.backendsURL + '/api/storage/' + props.cid
      openDownloader.value.click()
    }
    return {curStep, info, funcRestart, openDownloader, isAllowRestart}
  }
}
</script>

<style scoped>

</style>