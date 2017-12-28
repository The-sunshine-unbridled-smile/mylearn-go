<template>
  <div>
    <h1>info组件- 汇总信息</h1>
    <div class="infoContainer">
      <div class="infoItem">总数:{{totalNum}}</div>
      <div class="infoItem">总价:{{totalPrice}}</div>
      <div class="infoItem"><button @click="clearAllCart">清空购物车</button></div>
    </div>
  </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'
  export default {
    name: 'vinfo',
    data(){
      return{
      }
    },
    methods:{
//      clearAllCart(){}
      ...mapActions(['clearAllCart'])
    },
    computed:{
      ...mapGetters(['totalNum','totalPrice'])
    }
  }
</script>

<style scoped>
  .infoContainer{
    display:flex;
    align-item:center;
    justify-content:center;
    background-color:#555555;
    padding:25px;
  }
  .infoItem{
    flex:1;
    color:white;
  }
</style>
