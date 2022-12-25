<template>
  <NavFooter>
    <section class="contact_area section-padding" style="margin-top: 70px;">
      <IPFSDownloader :cid="cid"></IPFSDownloader>
    </section>
  </NavFooter>
</template>

<script>
import NavFooter from "../components/NavFooter.vue";
import IPFSDownloader from "../components/IPFSDownloader.vue";
import {useRouter} from "vue-router";

export default {
  title: "Download",
  components:{NavFooter, IPFSDownloader},
  setup() {
    const router = useRouter();
    const cid = router.currentRoute.value.params.cid;
    return {cid}
  }
}
</script>
