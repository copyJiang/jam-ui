<template>
  <button
    class="jam-button"
    :class="[
      type ? 'jam-button--' + type : '',
      size ? 'jam-button--' + size : '',
      {
        'is-plain': plain,
        'is-round': round,
        'is-dashed': dashed,
        'is-disabled': disabled,
      },
    ]"
  >
    <span><slot></slot></span>
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
    plain: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
    dashed: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "medium",
    },
  },
};
</script>
<style scoped>
</style>