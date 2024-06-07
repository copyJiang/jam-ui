<template>
  <div>
    <main>
      <h2>基础</h2>
      <section>
        <jam-button type="default">default</jam-button>
        <jam-button type="primary">primary</jam-button>
        <jam-button type="success">success</jam-button>
        <jam-button type="warning">warning</jam-button>
        <jam-button type="danger">danger</jam-button>
        <jam-button type="info">info</jam-button>
      </section>
      <section>
        <jam-button type="default" plain>default</jam-button>
        <jam-button type="primary" plain>primary</jam-button>
        <jam-button type="success" plain>success</jam-button>
        <jam-button type="warning" plain>warning</jam-button>
        <jam-button type="danger" plain>danger</jam-button>
        <jam-button type="info" plain>info</jam-button>
      </section>
      <section>
        <jam-button type="default" round>default</jam-button>
        <jam-button type="primary" round>primary</jam-button>
        <jam-button type="success" round>success</jam-button>
        <jam-button type="warning" round>warning</jam-button>
        <jam-button type="danger" round>danger</jam-button>
        <jam-button type="info" round>info</jam-button>
      </section>
    </main>
    <main>
      <h2>虚线按钮</h2>
      <section>
        <jam-button type="default" dashed plain>default</jam-button>
        <jam-button type="primary" dashed plain>primary</jam-button>
        <jam-button type="success" dashed plain>success</jam-button>
        <jam-button type="warning" dashed plain>warning</jam-button>
        <jam-button type="danger" dashed plain>danger</jam-button>
        <jam-button type="info" dashed plain>info</jam-button>
      </section>
    </main>
    <main>
      <h2>禁用按钮</h2>
      <section>
        <jam-button type="default" disabled>default</jam-button>
        <jam-button type="primary" disabled>primary</jam-button>
        <jam-button type="success" disabled>success</jam-button>
        <jam-button type="warning" disabled>warning</jam-button>
        <jam-button type="danger" disabled>danger</jam-button>
        <jam-button type="info" disabled>info</jam-button>
      </section>
      <section>
        <jam-button type="default" disabled plain>default</jam-button>
        <jam-button type="primary" disabled plain>primary</jam-button>
        <jam-button type="success" disabled plain>success</jam-button>
        <jam-button type="warning" disabled plain>warning</jam-button>
        <jam-button type="danger" disabled plain>danger</jam-button>
        <jam-button type="info" disabled plain>info</jam-button>
      </section>
    </main>
    <main>
      <h2>尺寸</h2>
      <section>
        <jam-button size="large">large</jam-button>
        <jam-button size="medium">medium</jam-button>
        <jam-button size="small">small</jam-button>
        <jam-button size="mini">mini</jam-button>
      </section>
      <section>
        <jam-button size="large" round>large</jam-button>
        <jam-button size="medium">medium</jam-button>
        <jam-button size="small">small</jam-button>
        <jam-button size="mini">mini</jam-button>
      </section>
    </main>
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
  margin-bottom: 10px;
  > button {
    margin-right: 20px;
  }
}
</style>