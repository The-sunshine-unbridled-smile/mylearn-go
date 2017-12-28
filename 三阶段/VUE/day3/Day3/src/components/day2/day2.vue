<template>
  <div>
    <h1>{{msg}}</h1>
    <h2>我的标题</h2>
    <btn btntext="按钮1" btnclass="red" @clicked="total += 1"/>
    <btn btntext="按钮2" btnclass="blue" @clicked="total += 1"/>
    <btn @clicked="total += 1"/>

    <h3>从爸爸拿到的数据 {{fromdad}}</h3>
    <!--<button @click="total+=1">day2自己的按钮</button>-->
    <h1>Day2.vue页面上总点赞数是多少: {{total}}</h1>
  </div>
</template>

<script>
  /* {}就是VUE的实例 */
  import button from '../common/button.vue'
  export default{
    name: 'day2',
    data: function () {
      return {
        msg: 'hello 140A day2.vue',
        total: 0
      }
    },
    components: {
      btn: button
    },
    props: ['fromdad']
  }
</script>

<style scoped>
  h1{
    color:red;
  }
</style>
