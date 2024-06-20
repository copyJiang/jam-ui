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



::: demo
```html
<template>
  <div>
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
  </div>
</template>
<style>
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
      <h2>尺寸</h2>
      <section>
        <jam-button size="large">large</jam-button>
        <jam-button size="medium">medium</jam-button>
        <jam-button size="small">small</jam-button>
        <jam-button size="mini">mini</jam-button>
      </section>
      <section>
        <jam-button size="large" round>large</jam-button>
        <jam-button size="medium" round>medium</jam-button>
        <jam-button size="small" round>small</jam-button>
        <jam-button size="mini" round>mini</jam-button>
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


::: demo
```html
<template>
  <div>
    <main>
      <h2>文字按钮</h2>
      <section>
        <jam-button size="large" text>large</jam-button>
        <jam-button size="medium" text>medium</jam-button>
        <jam-button size="small" text>small</jam-button>
        <jam-button size="mini" text>mini</jam-button>
      </section>
      <section>
        <jam-button type="default" text>default</jam-button>
        <jam-button type="primary" text>primary</jam-button>
        <jam-button type="success" text>success</jam-button>
        <jam-button type="warning" text>warning</jam-button>
        <jam-button type="danger" text>danger</jam-button>
        <jam-button type="info" text>info</jam-button>
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
|   参数   |        说明        |  类型   |                   可选值                    | 默认值  |
| :------: | :----------------: | :-----: | :-----------------------------------------: | :-----: |
|   type   |        类型        | string  | default/primary/success/warning/danger/info | default |
|  plain   |    按钮是否透明    | boolean |                      -                      |  false  |
|  round   |    是否显示圆角    | boolean |                      -                      |  false  |
|  dashed  |   边框是否为虚线   | boolean |                      -                      |  false  |
| disabled |      是否禁用      | boolean |                      -                      |  false  |
|   size   |     按钮的尺寸     | string  |           large/medium/small/mini           | medium  |
|   text   | 是否显示为文本按钮 | boolean |                      -                      |  false  |
