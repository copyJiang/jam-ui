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


### 基础
::: demo
```html
<template>
<main>
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
</template>
```
:::

### 虚线按钮
::: demo
```html
<template>
<main>
  <section>
    <jam-button type="default" dashed plain>default</jam-button>
    <jam-button type="primary" dashed plain>primary</jam-button>
    <jam-button type="success" dashed plain>success</jam-button>
    <jam-button type="warning" dashed plain>warning</jam-button>
    <jam-button type="danger" dashed plain>danger</jam-button>
    <jam-button type="info" dashed plain>info</jam-button>
  </section>
</main>
</template>
```
:::


### 禁用按钮
::: demo
```html
<template>
<main>
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
</template>
```
:::


### 尺寸
::: demo
```html
<template>
<main>
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
</template>
```
:::


### 文字按钮
::: demo
```html
<template>
<main>
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
</template>
```
:::


### 加载中
::: demo
```html
<template>
<main>
  <section>
    <jam-button type="default" loading>default</jam-button>
    <jam-button type="primary" loading>primary</jam-button>
    <jam-button type="success" loading>success</jam-button>
    <jam-button type="warning" loading>warning</jam-button>
    <jam-button type="danger" loading>danger</jam-button>
    <jam-button type="info" loading>info</jam-button>
  </section>
  <section>
    <jam-button type="default" plain loading>default</jam-button>
    <jam-button type="primary" plain loading>primary</jam-button>
    <jam-button type="success" plain loading>success</jam-button>
    <jam-button type="warning" plain loading>warning</jam-button>
    <jam-button type="danger" plain loading>danger</jam-button>
    <jam-button type="info" plain loading>info</jam-button>
  </section>
   <section>
    <jam-button type="default" round loading>default</jam-button>
    <jam-button type="primary" round loading>primary</jam-button>
    <jam-button type="success" round loading>success</jam-button>
    <jam-button type="warning" round loading>warning</jam-button>
    <jam-button type="danger" round loading>danger</jam-button>
    <jam-button type="info" round loading>info</jam-button>
  </section>
</main>
</template>
```
:::


### 图标按钮
::: demo
```html
<template>
<main>
   <h2>图标</h2>
   <section>
     <jam-button type="default" icon="jam-check">default</jam-button>
     <jam-button type="primary" icon="jam-eye">primary</jam-button>
     <jam-button type="success" icon="jam-home">success</jam-button>
     <jam-button type="warning" icon="jam-map">warning</jam-button>
     <jam-button type="danger" icon="jam-reload">danger</jam-button>
    <jam-button type="info" icon="jam-tag">info</jam-button>
   </section>
   <section>
    <jam-button type="default" plain icon="jam-check">default</jam-button>
    <jam-button type="primary" plain icon="jam-eye">primary</jam-button>
    <jam-button type="success" plain icon="jam-home">success</jam-button>
    <jam-button type="warning" plain icon="jam-map">warning</jam-button>
    <jam-button type="danger" plain icon="jam-reload">danger</jam-button>
    <jam-button type="info" plain icon="jam-tag">info</jam-button>
  </section>
  <section>
    <jam-button type="default" round icon="jam-check">default</jam-button>
    <jam-button type="primary" round icon="jam-eye">primary</jam-button>
    <jam-button type="success" round icon="jam-home">success</jam-button>
    <jam-button type="warning" round icon="jam-map">warning</jam-button>
    <jam-button type="danger" round icon="jam-reload">danger</jam-button>
    <jam-button type="info" round icon="jam-tag">info</jam-button>
 </section>
</main>
</template>
```
:::

<style lang="scss">
  section{
    margin-bottom:20px;
    display:flex;
    flex-wrap: wrap;
  }
  .jam-button{
    margin:0 6px 
  }
</style>


### Attributes
|   参数   |        说明        |  类型   |                   可选值                    | 默认值  |
| :------: | :----------------: | :-----: | :-----------------------------------------: | :-----: |
|   type   |        类型        | string  | default/primary/success/warning/danger/info | default |
|  plain   |    按钮是否透明    | boolean |                      -                      |  false  |
|  round   |    是否显示圆角    | boolean |                      -                      |  false  |
|  dashed  |   边框是否为虚线   | boolean |                      -                      |  false  |
| disabled |      是否禁用      | boolean |                      -                      |  false  |
|   size   |     按钮的尺寸     | string  |           large/medium/small/mini           | medium  |
|   text   | 是否显示为文本按钮 | boolean |                      -                      |  false  |
| loading  |     是否加载中     | boolean |                      -                      |  false  |
|   icon   |     图标名     | string  |                      -                      |   ''    |
