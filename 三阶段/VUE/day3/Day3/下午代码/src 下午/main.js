// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// var Vue = require("vue")
import App from './App'
import router from './router'
// 1.引入axios模块
import axios from 'axios'

Vue.config.productionTip = false
// 2.在原型对象上添加$axios属性指向axios对象
Vue.prototype.$axios = axios
// 组件内部通过this.$axios 调用
Vue.prototype.$host = "http://172.16.8.44:8888/"

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //router: router
  router,
  template: '<App/>',
  components: { App }
})
