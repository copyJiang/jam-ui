<template>
  <button
    class="jam-button"
    :class="[
      type ? 'jam-button--' + type : '',
      {
        'is-plain': plain,
        'is-round': round,
      },
    ]"
  >
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
    plain: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style scoped>
</style>