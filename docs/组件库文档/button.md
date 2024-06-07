---
title: Button按钮
date: 2024-06-05 14:32:14
permalink: /pages/button
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
  </div>
</template>
<style>
  section{
    margin-bottom:20px;
  }
  .jam-button{
    margin:0 6px 
  }
</style>
```
:::


::: demo
```html
<template>
  <div>
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
  </div>
</template>
<style>
  .jam-button{
    margin:0 6px 
  }
</style>
```
:::

##  Attributes
| 参数  |     说明     |  类型   |                   可选值                    | 默认值  |
| :---: | :----------: | :-----: | :-----------------------------------------: | :-----: |
| type  |     类型     | string  | default/primary/success/warning/danger/info | default |
| plain | 按钮是否透明 | boolean |                      -                      |  false  |
| round | 是否显示圆角 | boolean |                      -                      |  false  |
