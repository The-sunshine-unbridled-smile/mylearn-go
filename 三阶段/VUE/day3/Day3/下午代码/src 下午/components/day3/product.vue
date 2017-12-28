<template>
  <div>
    <h1>产品列表页面</h1>
    <button @click="addNew">添加一个商品</button>
    <div style="display: inline-block">
      <!--动态:to
      {path: URL路径,
      query: {参数}}-->
      <router-link :to="{path:'/productdetail',query:{id:item.id}}" v-for="item in productArr" :key="item.id">
        <showbox :productTitle="item.name" :productSubtitle="item.sub"
                 :productPrice="item.price" :imgsrc="item.img" ></showbox>
      </router-link>

    </div>
  </div>
</template>

<script>
  import showbox from './showbox.vue'
  export default {
    name: 'product',
    data () {
      return {
//        productArr: [
//          {id: 1, name: '产品1', images: 'images/1.jpg', sub: '产品副标题1', price: 30, content: '产品1详情文字内容'},
//          {id: 2, name: '产品2', images: 'images/2.jpg', sub: '产品副标题2', price: 50, content: '产品1详情文字内容'},
//          {id: 3, name: '产品3', images: 'images/3.jpg', sub: '产品副标题3', price: 20, content: '产品1详情文字内容'},
//          {id: 4, name: '产品4', images: 'images/4.jpg', sub: '产品副标题4', price: 60, content: '产品1详情文字内容'}
//        ]
        productArr: []
      }
    },
    components: {
      showbox: showbox
    },
//   初始化完毕 created
    /*跨域:
    * 1. JSONP - 1.服务器响应以JSONP形式返回，只支持get请求
    * 2. CORS - 2.服务器允许你不同域的来源进行访问 */
    created () {
      this.$axios.get('/api/product.do')
        .then(resp => {
          console.log(resp);
          this.productArr = resp.data
        })
    },
    methods: {
      addNew() {
        var newarr = [{id: 6, name: '产品6', img: 'images/6.jpg', sub: '产品副标题4', price: 60, content: '产品6详情文字内容'}]
        this.productArr = newarr.concat(this.productArr)
      }
    }
  }
</script>

<style scoped>
</style>
