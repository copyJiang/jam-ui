// 导入组件，组件必须声明 name
import jamButton from "./src";
// 为组件提供 install 安装方法，供按需引入
jamButton.install = function (Vue) {
    Vue.component(jamButton.name, jamButton);
};
// 导出组件
export default jamButton;
