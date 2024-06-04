// 导入组件，组件必须声明 name
import JarButton from "./src";
// 为组件提供 install 安装方法，供按需引入
// JarButton.install = function (Vue) {
//     Vue.component(JarButton.name, JarButton);
// };
// 导出组件
export default JarButton;
