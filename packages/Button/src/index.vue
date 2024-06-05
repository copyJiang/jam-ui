<template>
  <button class="jam-button" :class="[type ? 'jam-button--' + type : '']">
    <slot></slot>
  </button>
</template>
<script>
import "./index.scss";
export default {
  name: "jamButton",
  props: {
    type: {
      type: String,
      default: "default",
    },
  },
};
</script>
<style scoped>
</style>