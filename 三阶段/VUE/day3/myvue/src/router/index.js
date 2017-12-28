import Vue from 'vue'
import Router from 'vue-router'
import mynav from '@/components/mynav'
import footer from '@/components/footer'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mynav',
      component: mynav
    },
    {
      path: '/footer',
      name: 'footer',
      component: footer
    },
  ]
})
