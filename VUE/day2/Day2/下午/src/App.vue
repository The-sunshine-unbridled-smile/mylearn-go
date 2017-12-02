<template>
  <div id="app">
    <!--3.调用组件 - 组件注册过后，直接作为标签使用-->
    <day2/>
    <mynav></mynav>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
  /* 1.引入组件 export <=> import */
  import day2 from './components/day2/day2.vue'
  import nav from './components/Nav/nav.vue'
  /* 2.在实例对象里注册一下这个组件 */
  export default {
    name: 'app',
    /* created: function(){} */
    created () {
      console.log('Hello world 140A')
    },
    components: {
      day2: day2,
      mynav: nav
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
