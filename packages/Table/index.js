// 导入组件，组件必须声明 name
import BiuLoading from "./src";

// 为组件提供 install 安装方法，供按需引入
BiuLoading.install = function (Vue) {
    Vue.component(BiuLoading.name, BiuLoading);
};

// 导出组件
export default BiuLoading;
