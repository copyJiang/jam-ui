<template>
  <div class="jam-button">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "jarButton",
};
</script>
<style scoped>
.jam-button {
  display: inline-block;
  padding: 3px 6px;
  background: #000;
  color: #fff;
}
</style>