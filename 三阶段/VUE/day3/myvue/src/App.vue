<template>
  <div id="app">
    <mynav></mynav>
    <myfooter></myfooter>
    <!--<router-view/>-->
  </div>
</template>

<script>
  import mynav from './components/mynav.vue'
  import footer from './components/footer.vue'
export default {
  name: 'app',
  components:{
      mynav:mynav,
    myfooter:footer,
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
  /*clear: both;*/
  /*border: 1px solid black;*/
  margin: 0;
  padding: 0;
}
</style>
