import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'// 1.移入element-ui
import './styles/index.less' // 3.引入初始化全局样式

Vue.config.productionTip = false
Vue.use(ElementUI)// 2.注册ElementUI
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
