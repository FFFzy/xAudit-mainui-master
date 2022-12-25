<template>
  <NavFooter>
    <SearchPanel
        :keywords="keywords"
        :types="types"
        :tags="tags"
        :page="page"
        :page-size="pageSize"
        :sort="sort"
        :order="order"
    ></SearchPanel>
  </NavFooter>

</template>

<script>
import NavFooter from "../components/NavFooter.vue";
import {useRouter} from "vue-router";
import {ref, provide, watch, reactive} from "vue";
import SearchPanel from "../components/SearchPanel.vue";

export default {
  title: "Search",
  components: {SearchPanel, NavFooter},
  setup() {
    const router = useRouter();

    const keywords = ref(router.currentRoute.value.query.keywords)

    let _types = null
    if (router.currentRoute.value.query.types instanceof Array) {
      _types = router.currentRoute.value.query.types
    } else if (router.currentRoute.value.query.types != null) {
      _types = [router.currentRoute.value.query.types,]
    } else {
      _types = []
    }
    const types = reactive(_types)

    let _tags = null
    if (router.currentRoute.value.query.tags instanceof Array) {
      _tags = router.currentRoute.value.query.tags
    } else if (router.currentRoute.value.query.tags != null) {
      _tags = [router.currentRoute.value.query.tags,]
    } else {
      _tags = []
    }
    const tags = reactive(_tags)

    let _page = 1
    if (router.currentRoute.value.query.page) {
      _page = Number(router.currentRoute.value.query.page)
    }
    const page = ref(_page)

    let _pageSize = 15
    if (router.currentRoute.value.query.pageSize) {
      _pageSize = Number(router.currentRoute.value.query.pageSize)
    }
    const pageSize = ref(_pageSize)

    let _sort = 'relevance'
    if (router.currentRoute.value.query.sort){
      _sort = router.currentRoute.value.query.sort
    }
    const sort = ref(_sort)

    let _order = 'desc'
    if (router.currentRoute.value.query.order) {
      _order = router.currentRoute.value.query.order
    }
    const order = ref(_order)

    return {keywords, types, tags, page, pageSize, sort, order}
  }
}
</script>

<style scoped>

</style>