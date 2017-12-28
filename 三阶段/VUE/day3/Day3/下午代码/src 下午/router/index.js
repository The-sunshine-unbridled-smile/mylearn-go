import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Day2 from '@/components/day2/day2'
import Product from '@/components/day3/product'
import productdetail from '@/components/day3/productdetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/day2',
      name: 'day2',
      component: Day2
    },
    {
      path: '/product',
      name: 'product',
      component: Product
    },
    {
      path: '/hello',
      name: 'HelloWorld2',
      component: HelloWorld
    },
    {
      path: '/productdetail',
      name: 'productdetail',
      component: productdetail
    }
  ]
})
