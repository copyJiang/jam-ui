// 导入组件，组件必须声明 name
import jamCol from "./src";

// 为组件提供 install 安装方法，供按需引入
jamCol.install = function (Vue) {
    Vue.component(jamCol.name, jamCol);
};

// 导出组件
export default jamCol;
