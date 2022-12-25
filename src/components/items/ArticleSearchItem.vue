<template>
  <div class="container">
    <div class="row h3 col-md-11">
      <router-link :to="url" class="item-title">
        {{ title }}
      </router-link>
    </div>
    <div class="row col-md-12">
      <span>[{{ $t("message.searchItem.articleTypeTitle") }}] </span>
      <span> {{ upTime }}</span>
      <button type="button" class="btn btn-default item-tag"
              v-for="tag in tags">
        {{ tag }}
      </button>
    </div>
    <div class="row col-md-11 two-line-introduction"
         style="margin-top: 5px; margin-bottom: 5px">
      {{ $t("message.searchItem.introduction") }}: {{ introduction }}
    </div>
    <div class="row col-md-12">
      <JumpButton
          :icon="'fa-download'"
          :color="'btn-primary'"
          :size="'btn-sm'"
          :func-jump="funcJumpDownload"
          :info="$t('message.searchItem.btnDownload')">
      </JumpButton>
      <span class="pull-right col-md-2">{{ $t("message.searchItem.reading") }}: {{ downloadCnt }}</span>
    </div>
    <h5 class="page-header col-md-11" style="margin-top: 5px"></h5>
  </div>

</template>

<script>
import JumpButton from "../buttons/JumpButton.vue";

export default {
  components: {JumpButton},
  title: "ArticleSearchItem",
  props: {
    url: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    introduction: {
      type: String,
      required: true,
    },
    downloadCnt: {
      type: Number,
      required: true,
    },
    upTime: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
      default() {
        return []
      }
    },
    funcJumpDownload: {
      type: Function,
      default: null,
    },
  }
}
</script>

<style scoped>
.two-line-introduction {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>