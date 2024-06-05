import Vue from 'vue'
import App from './App.vue'
// 导入组件库
import JamUi from '../packages'

Vue.use(JamUi)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
