import HelloWorld from '@/components/HelloWorld'
import Day2 from '@/components/day2/day2'
import day5less from '@/components/day5/lessdemo'
import vuexdemo from '@/components/vuex/basic'
export default
[{
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
    path: '/day5less',
    name: 'day5less',
    component: day5less
  },
  {
    path: '/vuex',
    name: 'vuexdemo',
    component: vuexdemo
  }]



