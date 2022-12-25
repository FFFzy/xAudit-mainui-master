<template>
  <button type="button" class="btn"
          data-toggle="modal" data-target="#modal-btn"
          :class="[color, size]"
          v-if="content!=null"
          @click="isContentShow=true">
    <i class="fa" :class="icon"></i>
    {{ info }}
  </button>
  <div id="modal-btn" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"
       v-if="isContentShow">
    <div class="modal-dialog" style="background: white">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true"
                  @click="isContentShow=false">
            ×
          </button>
          <h4 class="modal-title" id="myModalLabel">Citation</h4>
        </div>
        <div class="modal-body">
          <ul>
            <li v-for="(value, key) in content">
              <b>{{ key }}:</b>
              <span> {{ value }} </span>
            </li>
          </ul>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal"
                  @click="isContentShow=false">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  title: "ModalButton",
  props: {
    icon: {
      type: String,
      default: null,
    },
    color: {
      type: String,
      default: 'btn-primary'
    },
    size: {
      type: String,
      default: null,
    },
    info: {
      type: String,
      default: null,
    },
    content: {
      type: Object,
      default() {
        return null
      }
    }
  },
  setup() {
    const isContentShow = ref(false)
    return {isContentShow}
  }
}
</script>

<style scoped>

</style>