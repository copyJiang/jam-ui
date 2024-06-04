import Vue from 'vue'
import App from './App.vue'
// 导入组件库
import JarUi from '../packages'
console.log('%c [ JarUi ]-5', 'font-size:13px; background:pink; color:#bf2c9f;', JarUi)

Vue.use(JarUi)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
