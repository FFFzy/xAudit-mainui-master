<template>
  <button class="btn btn-primary"
          :class="size"
          data-toggle="modal"
          @click="funcShowModal('show')"
          v-if="BibTex && IEEECite && ACMCite">
    <i class="fa fa-quote-right"></i> {{ $t("message.entity.btnCite") }}
  </button>
  <div ref="modal" class="modal fade"
       tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
       aria-hidden="true" style="display: none;">
    <div class="modal-dialog" style="background: white">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
          <h4 class="modal-title" id="myModalLabel">{{ $t("message.entity.modalCiteTitle") }}</h4>
        </div>
        <div class="modal-body">
          <ul class="text-left" style="list-style-type: none">
            <li v-if="BibTex !== ''">
              <span class="col-md-2"><b>BibTex:</b></span>
              <span class="col-md-10"
                    style="white-space: pre-line;">
                {{ BibTex }}
              </span>
            </li>
            <li v-if="IEEECite !== ''">
              <b class="col-md-2">IEEE:</b>
              <span class="col-md-10">{{ IEEECite }}</span>
            </li>
            <li v-if="ACMCite !== ''">
              <b class="col-md-2">ACM:</b>
              <span class="col-md-10">{{ ACMCite }}</span>
            </li>
          </ul>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">{{
              $t("message.entity.modalCiteCloseTitle")
            }}
          </button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {ref} from "vue";

export default {
  name: "CiteButton",
  props: {
    BibTex: {
      type: String,
      default: null,
    },
    IEEECite: {
      type: String,
      default: null,
    },
    ACMCite: {
      type: String,
      default: null,
    },
    size: {
      type: String,
      default: null,
    }
  },
  setup() {
    const modal = ref(null)
    const funcShowModal = (_isShow) => {
      $(modal.value).modal(_isShow)
    }
    return {modal, funcShowModal}
  }
}
</script>

<style scoped>

</style>