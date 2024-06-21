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

<jam-icon :font-size="32" color='red' name="jam-loading" />
<jam-icon :font-size="32" name="jam-arrow-down" />
<jam-icon :font-size="32" name="jam-arrow-alt" />
<jam-icon :font-size="32" name="jam-arrow-up" />
<jam-icon :font-size="32" name="jam-bell" />

```
:::



### 图标合集

::: demo
```html
<ul class="icon-list">
  <li v-for="item in icons" :key="item">
    <span>
      <jam-icon :font-size="36" :name="item" />
      <span>{{ item }}</span>
    </span>
  </li>
</ul>
<script>
  export default {
    data(){
      return{
      icons: [
        "jam-loading",
        "jam-loading-strange",
        "jam-arrow-down",
        "jam-arrow-alt",
        "jam-arrow-up",
        "jam-bell",
        "jam-camera",
        "jam-check",
        "jam-check-circle",
        "jam-close-circle",
        "jam-close",
        "jam-cloud-download",
        "jam-cloud-upload",
        "jam-copy",
        "jam-double-arrow-left",
        "jam-date",
        "jam-double-arrow-right",
        "jam-delete",
        "jam-down",
        "jam-down-circle",
        "jam-download",
        "jam-environment",
        "jam-eye",
        "jam-file-add",
        "jam-file-excel",
        "jam-file-jpg",
        "jam-file-pdf",
        "jam-filter",
        "jam-folder",
        "jam-file-text",
        "jam-folder-add",
        "jam-heart-off",
        "jam-folder-open",
        "jam-home",
        "jam-inbox",
        "jam-left",
        "jam-information-circle",
        "jam-laptop",
        "jam-left-circle",
        "jam-left-square",
        "jam-login",
        "jam-menu-fold",
        "jam-menu-unfold",
        "jam-mail",
        "jam-map",
        "jam-message",
        "jam-minus-circle",
        "jam-pause-circle",
        "jam-link",
        "jam-play-circle",
        "jam-picture",
        "jam-question-circle",
        "jam-right",
        "jam-safety",
        "jam-reload",
        "jam-poweroff",
        "jam-plus-circle",
        "jam-right-circle",
        "jam-search",
        "jam-shrink",
        "jam-stop",
        "jam-share",
        "jam-swap",
        "jam-tag",
        "jam-time",
        "jam-setting",
        "jam-up",
        "jam-unlock",
        "jam-user",
        "jam-up-circle",
        "jam-upload",
        "jam-verticle-right",
        "jam-user-add",
        "jam-usergroup-delete",
        "jam-usergroup-add",
        "jam-user-delete",
        "jam-verification",
        "jam-warning",
        "jam-zoom-in",
        "jam-wifi",
        "jam-video-camera",
        "jam-zoom-out",
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
    width: 130px;
    height: 130px;
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
        height: 60px;
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