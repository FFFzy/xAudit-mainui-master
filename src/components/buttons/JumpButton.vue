<template>
  <button type="button" class="btn"
          :class="[color, size]"
          v-if="funcJump!=null"
          @click="funcJump()">
    <i class="fa" :class="icon"></i>
    {{ info }}
  </button>
</template>

<script>
export default {
  title: "JumpButton",
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
    funcJump: {
      type: Function,
      default: null,
    },
    info: {
      type: String,
      default: null,
    }
  }
}
</script>

<style scoped>

</style>