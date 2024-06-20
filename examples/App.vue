<template>
  <div id="app">
    <exButton></exButton>
    <exIcon></exIcon>
    <!-- <exLayout></exLayout> -->
  </div>
</template>

<script>
import exButton from "./components/exButton.vue";
// import exLayout from "./components/exLayout.vue";
import exIcon from "./components/exIcon.vue";
export default {
  name: "App",
  components: {
    exButton,
    exIcon,
    // exLayout,
  },
};
</script>

<style>
</style>
