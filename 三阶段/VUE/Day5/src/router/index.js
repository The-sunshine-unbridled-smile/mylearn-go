import Vue from 'vue'
import Router from 'vue-router'
import product from './product'
import service from './service'

Vue.use(Router)
//1.product service如何导出
//2.router index.js如何引入
//3.如何把里面的数据加载到下面的配置
export default new Router({
  routes: [
    ...product,
    ...service
  ]
})


