import Product from '@/components/day3/product'
import productdetail from '@/components/day3/productdetail'
import movies from '@/components/day4/movie'
import maintab from '@/components/day4/maintab'
import inner1 from '@/components/day4/inner1'
import HelloWorld from '@/components/HelloWorld'
export default
[
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
  },
  {
    path: '/movies',
    name: 'movies',
    component: movies
  },
  {
    path: '/maintab',
    name: 'maintab',
    component: maintab,
    children:[
      {
        path: 'product',
        name: 'inner1',
        component: inner1
      }
    ]
  }
]
