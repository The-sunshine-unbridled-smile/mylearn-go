import Vue from 'vue'
import Router from 'vue-router'  //引入路由模块
import HelloWorld from '@/components/HelloWorld'
import day2 from '@/components/day2/day2'
import product from '@/components/day3/product'
import productdetail from '@/components/day3/productdetail'

Vue.use(Router);  //全局调用

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/day2',   //拦截的地址
      name: 'day2',    //随便取的名字
      component: day2   //引入的模块名字
    },
    {
      path: '/product',
      name: 'product',
      component: product
    },
    {
      path: '/productdetail',
      name: 'productdetail',
      component: productdetail
    },
  ],

})
