// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'   //引入模块
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false;

//在原型对象上添加$axios属性指向$axios对象组件内部通过this.$axios调用
Vue.prototype.$axios=axios;
//配置图片的路径
Vue.prototype.$host="http://172.16.8.20:8888/";


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',  //挂载的来自APP.Vue
  components: { App }
})
