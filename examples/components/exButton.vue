<template>
  <div>
    <h2>基础</h2>
    <section>
      <jam-button type="default">default</jam-button>
      <jam-button type="primary">primary</jam-button>
      <jam-button type="success">success</jam-button>
      <jam-button type="warning">warning</jam-button>
      <jam-button type="danger">danger</jam-button>
      <jam-button type="info">info</jam-button>
    </section>
  </div>
</template>
<script>
export default {
  name: "ex-button",
};
</script>
<style lang="scss" scoped>
section {
  display: flex;
  > button {
    margin-right: 20px;
  }
}
</style>