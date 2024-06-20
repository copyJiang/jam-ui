---
title: icon图标
date: 2024-06-20 09:22:01
permalink: /pages/icon
categories:
  - 组件库文档
  - icon
tags:
  - 
---

### 如何使用
使用 ```name="icon"``` 来声明图标，具体图标的名称请 ```copy``` 相应的标签

::: demo
```html

<jam-icon :font-size="32" color='red' name="jam-icon-arrow-down" />
<jam-icon :font-size="32" name="jam-icon-arrow-alt" />
<jam-icon :font-size="32" name="jam-icon-arrow-up" />
<jam-icon :font-size="32" name="jam-icon-bell" />
<jam-icon :font-size="32" name="jam-icon-camera" />

```
:::



### 图标合集

::: demo
```html
<ul class="icon-list">
  <li v-for="name in icons" :key="name">
    <span>
      <jam-icon :font-size="32" :name="name"></jam-icon>
      <span>{{name}}</span>
    </span>
  </li>
</ul>
<script>
  export default {
    data(){
      return{
      icons: [
        "jam-icon-arrow-down",
        "jam-icon-arrow-alt",
        "jam-icon-arrow-up",
        "jam-icon-bell",
        "jam-icon-camera",
        "jam-icon-check",
        "jam-icon-circle-check",
        "jam-icon-circle-close",
        "jam-icon-close",
        "jam-icon-cloud-download",
        "jam-icon-cloud-upload",
        "jam-icon-copy",
        "jam-icon-db-arrow-left",
        "jam-icon-date",
        "jam-icon-db-arrow-right",
        "jam-icon-delete",
        "jam-icon-down",
        "jam-icon-down-circle",
        "jam-icon-download",
        "jam-icon-environment",
        "jam-icon-eye",
        "jam-icon-file-add",
        "jam-icon-file-excel",
        "jam-icon-file-jpg",
        "jam-icon-file-pdf",
        "jam-icon-filter",
        "jam-icon-folder",
        "jam-icon-file-text",
        "jam-icon-folder-add",
        "jam-icon-heart-off",
        "jam-icon-folder-open",
        "jam-icon-home",
        "jam-icon-inbox",
        "jam-icon-left",
        "jam-icon-information",
        "jam-icon-laptop",
        "jam-icon-left-circle",
        "jam-icon-left-square",
        "jam-icon-login",
        "jam-icon-menu-fold",
        "jam-icon-menu-unfold",
        "jam-icon-mail",
        "jam-icon-map",
        "jam-icon-message",
        "jam-icon-minus-circle",
        "jam-icon-pause-circle",
        "jam-icon-link",
        "jam-icon-play-circle",
        "jam-icon-picture",
        "jam-icon-question-circle",
        "jam-icon-right",
        "jam-icon-safety",
        "jam-icon-reload",
        "jam-icon-poweroff",
        "jam-icon-plus-circle",
        "jam-icon-right-circle",
        "jam-icon-search",
        "jam-icon-shrink",
        "jam-icon-stop",
        "jam-icon-share",
        "jam-icon-swap",
        "jam-icon-tag",
        "jam-icon-time",
        "jam-icon-setting",
        "jam-icon-up",
        "jam-icon-unlock",
        "jam-icon-user",
        "jam-icon-up-circle",
        "jam-icon-upload",
        "jam-icon-verticle-right",
        "jam-icon-user-add",
        "jam-icon-usergroup-delete",
        "jam-icon-usergroup-add",
        "jam-icon-user-delete",
        "jam-icon-verification",
        "jam-icon-warning",
        "jam-icon-zoom-in",
        "jam-icon-wifi",
        "jam-icon-video-camera",
        "jam-icon-zoom-out",
      ],
      }
    },
  };
</script>

```
:::

<style lang="scss">
.icon-list {
  display: flex;
  flex-wrap: wrap;
  li {
    width: 120px;
    height: 120px;
    border: 1px solid #eee;
    text-align: center;
    vertical-align: middle;
    list-style-type: none;
    > span {
      display: inline-block;
      vertical-align: middle;
      height: 100%;
      width: 100%;
      &:hover {
        > i {
          color: #5cb6ff !important;
        }
        > span {
          color: #5cb6ff;
        }
      }
      > i {
        display: block;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      > span {
        display: inline-block;
        font-size: 14px;
        height: 50px;
        padding: 0 4px;
        color: rgb(153, 169, 191);
      }
    }
  }
}
</style>


###  Attributes
|   参数   |   说明   |  类型  | 可选值 | 默认值  |
| :------: | :------: | :----: | :----: | :-----: |
| fontSize | 图标大小 | number |        |   16    |
|  color   | 图标颜色 | string |   -    | #606266 |
|   name   | 图标种类 | string |   -    |         |