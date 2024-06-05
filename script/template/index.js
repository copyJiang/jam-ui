// 导入组件，组件必须声明 name
import jamLoading from "./src";

// 为组件提供 install 安装方法，供按需引入
jamLoading.install = function (Vue) {
    Vue.component(jamLoading.name, jamLoading);
};

// 导出组件
export default jamLoading;
