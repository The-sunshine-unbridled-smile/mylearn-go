<template>
  <div>
    <h1>这是标签页页面</h1>
    <ul class="tabs">
      <li>
        <router-link to="/maintab/product">标签1</router-link>
      </li>
      <li>标签2</li>
      <li>标签3</li>
    </ul>
    <div class="tabContent">
      <router-view></router-view>
    </div>
    <h1>其他不变的内容</h1>
    <button @click="goback">上一页</button>
    <button @click="toproduct">跳转到product页面</button>
  </div>
</template>

<script>
  export default {
    name: 'maintab',
    methods: {
      goback () {
        this.$router.back()
      },
      toproduct () {
        this.$router.push("/movies")
      }
    }
  }
</script>

<style scoped>
  .tabs li{
    float:left;
    width:100px;
    list-style: none;
  }
  .tabs{
    display:inline-block;
  }
  .tabContent{
    height:300px;
    width:800px;
    border:1px solid red;
  }
</style>
