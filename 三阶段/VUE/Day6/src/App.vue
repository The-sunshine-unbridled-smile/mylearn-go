<template>
  <div id="app">
    <!--3.调用组件 - 组件注册过后，直接作为标签使用-->
    <header>
      <mynav></mynav>
    </header>
    <div class="div1">
      <h1>下面是视图窗口</h1>
      <transition enter-active-class="animated zoomInLeft" leave-active-class="animated zoomOutRight" mode="out-in">
        <!--通过include / exclude 去包含/排除指定组件的缓存
        名字是组件里面的name值-->
        <keep-alive exclude="productdetail">
          <router-view></router-view>
        </keep-alive>
      </transition>
    </div>

    <footer>
      <h1>页脚</h1>
    </footer>
  </div>
</template>

<script>
  /* 1.引入组件 export <=> import */
  import day2 from './components/day2/day2.vue'
  import nav from './components/Nav/nav.vue'
  import product from './components/day3/product.vue'
  /* 2.在实例对象里注册一下这个组件 */
  export default {
    name: 'app',
    /* created: function(){} */
    created () {
      console.log('Hello world 140A')
    },
    components: {
      day2: day2,
      mynav: nav,
      product: product
    }
  }
</script>

<style>
  @import './assets/animate.css';
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  a{
    color:darkslategray;
    text-decoration: none;
  }
  .active{
    color:white;
    font-weight:bold;
    background-color:deeppink
  }
  .div1{
    border:1px solid red;
  }
</style>
