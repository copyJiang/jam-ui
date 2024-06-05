---
title: Button按钮
date: 2024-06-05 14:32:14
permalink: /pages/组件库文档/button
categories:
  - 组件库文档
  - button
tags:
  - 
---


::: demo
```html
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
</script>
<style lang="scss" scoped>
section {
  display: flex;
  > button {
    margin-right: 20px !important;
  }
}
</style>
```
:::