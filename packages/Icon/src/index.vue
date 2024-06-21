<template>
  <i :class="name" class="iconfont" :style="styles"></i>
</template>
  
  <script>
import "./index.css";

export default {
  name: "jamIcon",
  props: {
    name: {
      //图标类别
      type: String,
      default: "",
    },
    fontSize: {
      //图标大小
      type: Number,
      default: 16,
    },
    color: {
      //图标颜色
      type: String,
      default: "#606266",
    },
  },
  data() {
    return {
      prefixaClss: "iconfont",
    };
  },
  created() {},
  computed: {
    styles() {
      return {
        fontSize: this.fontSize + "px",
        color: this.color,
      };
    },
  },
  methods: {},
};
</script>
  
  <style lang="scss"></style>
  