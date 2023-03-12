<template>
  <section class="contact_area section-padding" style="margin-top: 100px;background: #f7f7f7">
    <div class="container">
      <div class="row row-search">
        <span class="h4 text-center col-md-2"><b class="text-primary">XBlock</b>
                  {{ $t("message.searchPanel.secSearchInputTitle") }}
        </span>
        <span class="input-group col-md-9" style="padding-top: 4px">
          <input type="text" class="form-control" v-model="newKeywords">
          <span class="input-group-btn">
            <a class="btn btn-default" type="button"
               @click="funcSearch(newKeywords,types,tags,1,pageSize,sort,order)">
              Go
            </a>
          </span>
        </span><!-- /input-group -->
      </div><!--- END ROW -->

      <div class="row row-search">
        <span class="text-center col-md-2" style="padding-top: 5px">
          <b>{{ $t("message.searchPanel.secSearchTypeTitle") }}</b>
        </span>
        <div class="col-md-10">
          <div class="row">
            <button type="button" class="btn btn-tag"
                    :class="types.findIndex((val)=>{return val==='datasets'})>=0? 'btn-primary':'btn-default'"
                    @click="funcSearch(keywords,funcNotElem('datasets',types),[],1,pageSize,sort,order)">
              dataset
            </button>
            <button type="button" class="btn btn-tag"
                    :class="types.findIndex((val)=>{return val==='papers'})>=0? 'btn-primary':'btn-default'"
                    @click="funcSearch(keywords,funcNotElem('papers',types),[],1,pageSize,sort,order)">
              paper
            </button>
<!--            <button type="button" class="btn btn-tag"-->
<!--                    :class="types.findIndex((val)=>{return val==='articles'})>=0? 'btn-primary':'btn-default'"-->
<!--                    @click="funcSearch(keywords,funcNotElem('articles',types),[],1,pageSize,sort,order)">-->
<!--              knowledge-->
<!--            </button>-->
          </div>
        </div>
      </div>

      <div class="row row-search">
        <span class="text-center col-md-2" style="padding-top: 5px">
          <b>{{ $t("message.searchPanel.secSearchTagTitle") }}</b>
        </span>
        <div class="col-md-10">
          <div class="row">
            <button type="button" class="btn btn-tag"
                    v-for="tag in allTags"
                    :class="tags.findIndex((val)=>{return val===tag}) >= 0?'btn-primary':'btn-default'"
                    @click="funcSearch(keywords,types,funcNotElem(tag, tags),1,pageSize,sort,order)">
              {{ tag }}
            </button>
          </div>
        </div>
      </div>
    </div><!--- END CONTAINER -->

    <div class="container">
      <div class="panel panel-default">
        <div class="panel-heading">
          <span>{{ $t("message.searchPanel.secListSortTitle") }}</span>
          <a class="btn btn-default" style="margin: 2px"
             @click="funcSearch(keywords,types,tags,1,pageSize,
             'relevance',
             (sort==='relevance')?(order==='desc')?'asc':'desc':'desc')">
            {{ $t("message.searchPanel.secListSortChoiceTitle3") }}
            <i class="fa fa-arrow-down text-primary"
               v-if="sort==='relevance' && order==='desc'"></i>
            <i class="fa fa-arrow-up text-primary"
               v-if="sort==='relevance' && order==='asc'"></i>
          </a>
          <a class="btn btn-default" style="margin: 2px"
             @click="funcSearch(keywords,types,tags,1,pageSize,
             'up_time',
             (sort==='up_time')?(order==='desc')?'asc':'desc':'desc')">
            {{ $t("message.searchPanel.secListSortChoiceTitle1") }}
            <i class="fa fa-arrow-down text-primary"
               v-if="sort==='up_time' && order==='desc'"></i>
            <i class="fa fa-arrow-up text-primary"
               v-if="sort==='up_time' && order==='asc'"></i>
          </a>
          <a class="btn btn-default" style="margin: 2px"
             @click="funcSearch(keywords,types,tags,1,pageSize,
             'download_cnt',
             (sort==='download_cnt')?(order==='desc')?'asc':'desc':'desc')">
            {{ $t("message.searchPanel.secListSortChoiceTitle2") }}
            <i class="fa fa-arrow-down text-primary"
               v-if="sort==='download_cnt' && order==='desc'"></i>
            <i class="fa fa-arrow-up text-primary"
               v-if="sort==='download_cnt' && order==='asc'"></i>
          </a>
          <div class="pull-right">
            <div class="btn-group">
              <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                      aria-expanded="false">
                {{pageSize}}
                <span class="caret"></span>
              </button>
              <ul class="dropdown-menu">
                <li><a @click="funcSearch(keywords,types,tags,1,15,sort,order)">15</a></li>
                <li><a @click="funcSearch(keywords,types,tags,1,30,sort,order)">30</a></li>
                <li><a @click="funcSearch(keywords,types,tags,1,50,sort,order)">50</a></li>
              </ul>
            </div>
            <span>{{ $t("message.searchPanel.secListItemsTitle") }}</span>
          </div>
        </div>
        <div class="panel-body">
          <div class="container">
            <div class="row text-center" style="margin-top: 50px"
                 v-if="isLoading">
              <div class="sp sp-circle"></div>
              <div>{{ $t("message.searchPanel.secListLoadingTitle") }}</div>
            </div>
          </div>
          <div class="container">
            <div class="row text-center" style="margin-top: 50px"
                 v-if="isNoResult">
              <span>{{ $t("message.searchPanel.secListNoItemsTitle") }}</span>
            </div>
          </div>
          <div class="container" v-for="item in items">
            <div class="row">
              <DatasetSearchItem
                  v-if="item['type']==='datasets'"
                  :id="item['id']"
                  :url="'/dataset/' + item['id']"
                  :name="item['name']"
                  :tags="item['tags']"
                  :up-time="item['up_time']"
                  :introduction="item['introduction']"
                  :download-cnt="item['download_cnt']"
                  :func-jump-download="(item['url']!=='')?()=>{funcJumpDownload(item['url'])}:null"
                  :func-jump-paper="(item['paper_id']!==0)?()=>{router.push('/paper/' + item['paper_id'])}:null"
                  :cite="(item['paper_bib_tex']!==''||item['paper_ieee_cite']!==''||item['paper_acm_cite']!=='')?
                  {'BibTex':item['paper_bib_tex'], 'IEEECite':item['paper_ieee_cite'], 'ACMCite':item['paper_acm_cite']}:null"
              ></DatasetSearchItem>
            </div>
            <div class="row">
              <PaperSearchItem
                  v-if="item['type']==='papers'"
                  :id="item['id']"
                  :title="item['title']"
                  :tags="item['tags']"
                  :introduction="item['introduction']"
                  :download-cnt="item['download_cnt']"
                  :up-time="item['up_time']"
                  :func-jump-download="(item['url']!=='')?()=>{funcJumpDownload(item['url'])}:null"
                  :func-jump-download-p-p-t="(item['url4ppt']!=='')? ()=>{funcJumpDownload(item['url4ppt'])}:null"
                  :func-jump-dataset="(item['dataset_id']!==0)?()=>{router.push('/dataset/' + item['dataset_id'])}:null"
                  :cite="(item['bib_tex']!==''||item['ieee_cite']!==''||item['acm_cite']!=='')?
                  {'BibTex':item['bib_tex'], 'IEEECite':item['ieee_cite'], 'ACMCite':item['acm_cite']}:null"
              ></PaperSearchItem>
            </div>
            <div class="row">
              <ArticleSearchItem
                  v-if="item['type']==='articles'"
                  :url="'/article/' + item['id']"
                  :title="item['title']"
                  :tags="item['tags']"
                  :introduction="item['introduction']"
                  :download-cnt="item['download_cnt']"
                  :up-time="item['up_time']"
              ></ArticleSearchItem>
            </div>
          </div>
        </div>

        <div class="row" style="padding-left: 15px;padding-right: 15px">
          <div class="col-sm-12">
            <div class="dataTables_paginate paging_simple_numbers pull-right">
              <div class="btn-group" role="group" aria-label="pagination" style="padding: 15px 0">
                <button class="btn btn-default" aria-label="pagination-fitst"
                  :class="page===1?'disabled':''"
                    @click="funcSearch(keywords,types,tags,1,pageSize,sort,order)">
                  First
                </button>
                <button class="btn btn-default" aria-label="pagination-pre"
                    :class="page===1?'disabled':''"
                    @click="funcSearch(keywords,types,tags,page-1,pageSize,sort,order)">
                  <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                </button>
                <button class="btn btn-default" disabled>Page {{page}} of {{pages}}</button>
                <button class="btn btn-default" aria-label="pagination-next"
                  :class="page===pages?'disabled':''"
                  @click="funcSearch(keywords,types,tags,page+1,pageSize,sort,order)">
                  <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                </button>
                <button class="btn btn-default" aria-label="pagination-last"
                    :class="page===pages?'disabled':''"
                    @click="funcSearch(keywords,types,tags,pages,pageSize,sort,order)">
                  Last
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>

import {reactive, ref} from "vue";
import DatasetSearchItem from "./items/DatasetSearchItem.vue";
import {useRouter} from "vue-router";
import confs from "../confs";
import PaperSearchItem from "./items/PaperSearchItem.vue";
import ArticleSearchItem from "./items/ArticleSearchItem.vue";

export default {
  name: "SearchPanel",
  components: {ArticleSearchItem, PaperSearchItem, DatasetSearchItem},
  props: {
    keywords: {
      type: String,
      default: null
    },
    types: {
      type: Array,
      default() {
        // return ['datasets', 'papers', 'articles']
        return ['datasets', 'papers']
      }
    },
    tags: {
      type: Array,
      default() {
        return [];
      }
    },
    page: {
      type: Number,
      default: 1,
    },
    pageSize: {
      type: Number,
      default: 15,
    },
    sort: {
      type: String,
      default: "relevance",
    },
    order: {
      type: String,
      default: "desc",
    }
  },
  setup(props) {
    const router = useRouter()
    const newKeywords = ref(props.keywords)
    const items = reactive([])
    const pages = ref(1)
    const allTags = reactive([])
    const isLoading = ref(true)
    const isNoResult = ref(false)

    // 请求type
    $.ajax({
      url: confs.backendsURL + "/api/info/category/type",
      type: "GET",
      data: {
        "types": props.types
      },
      traditional: true,
      success: (rsp) => {
        if (!rsp.tags) {
          return
        }
        for (let i = 0; i < rsp.tags.length; i++) {
          allTags.push(rsp.tags[i].Name)
        }
      }
    })

    // 请求item
    $.ajax({
      url: confs.backendsURL + "/api/info/search",
      type: "GET",
      data: {
        "types": props.types,
        "tags": props.tags,
        "keywords": props.keywords,
        "page": props.page,
        "pageSize": props.pageSize,
        "sort": props.sort,
        "order": props.order,
      },
      traditional: true,
      success: (rsp) => {
        for (let i = 0; i < rsp.data.length; i++) {
          rsp.data[i].tags = rsp.data[i].tags.map((_tag) => {
            return _tag.name
          })
          rsp.data[i].up_time = new Date(rsp.data[i].up_time)
          rsp.data[i].up_time = rsp.data[i].up_time.getFullYear() + '-' + (rsp.data[i].up_time.getMonth() + 1)

          items.push(rsp.data[i])
        }
        pages.value = rsp.pages

        // 关闭loading动画
        isLoading.value = false

        // 检测是不是没有搜索结果
        isNoResult.value = (rsp.data.length === 0)
      }
    })

    // 跳转更新函数
    const funcSearch = (_keywords, _types, _tags, _page, _pageSize, _sort, _order) => {
      router.push({
        path: '/search',
        query: {
          keywords: _keywords,
          types: _types,
          tags: _tags,
          page: _page,
          pageSize: _pageSize,
          sort: _sort,
          order: _order
        }
      })
    }

    // 下载
    const funcJumpDownload = (_url) => {
      if (_url.startsWith("ipfs")) {
        const u = new URL(_url)
        router.push({
          "path": "/download/" + u.pathname.slice(2),
        })
        return
      }
      window.location = _url
    }

    // 数组元素取非
    const funcNotElem = (elem, arr) => {
      let elemIndex = arr.findIndex((val) => {
        return val === elem
      })
      if (elemIndex >= 0) {
        let _arr = []
        for (let i = 0; i < arr.length; i++) {
          if (elemIndex === i) continue
          _arr.push(arr[i])
        }
        return _arr
      }
      return arr.concat([elem,])
    }
    return {newKeywords, items, router, pages, allTags, isLoading, isNoResult,
      funcSearch, funcNotElem, funcJumpDownload, window}
  }
}
</script>

<style scoped>
.row-search {
  margin-bottom: 15px;
}

.btn-tag {
  margin: 3px;
}
</style>