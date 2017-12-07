<template>
  <div id="app">
    <!--<day2 fromdad="传给儿子"></day2>   &lt;!&ndash;使用day2这个组件&ndash;&gt;-->
    <header>
      <mynav></mynav>
    </header>
    <!--<keep-alive>-->
      <router-view></router-view>   <!--前台路由拦截的内容都放在router-view中-->
    <!--</keep-alive>-->
    <footer>
      <h1>页脚</h1>
    </footer>

    <!--<product></product>-->
    <!--<showbox></showbox>-->
    <!--<img src="./assets/logo.png">-->
  </div>
</template>
<script>
  /*1：引入组件，import*/
  import  day2 from './components/day2/day2.vue';
  import NAV from './components/nav/nav.vue'
  //  import showbox from './components/day3/showbox.vue'
  import product from './components/day3/product.vue'

  export default {
    name: 'app',  //导出成一个对象
    components: {
      day2: day2, /*2：在实例对象里注册这个组件*/
      mynav: NAV,
//      showbox:showbox,
      product: product,
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
