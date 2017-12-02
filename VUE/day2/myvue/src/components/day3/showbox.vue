<template>
  <figure>
    <img :src="$host+imgsrc" alt="">
    <figcaption>
      <h1>{{productTitle}}</h1>
      <h2>{{productSubtitle}}</h2>
      <h3>{{productPrice}}</h3>
    </figcaption>
    <mybtn btntext="购买" btnclass="red" @clicked="buy"/> <!--使用注册的组件-->
  </figure>
</template>
<script>
  import button from '../day2/button.vue'  /*引入button组件*/
  export default {
    name: 'showbox',
    data: function () {
      return {}
    },
    /*从父亲那里传过来的数据*/
    props: ['imgsrc', 'productTitle', 'productSubtitle', 'productPrice'],
    components:{
        mybtn:button, /*注册组件*/
    },
    methods:{
      buy () {
          alert("购买")
      }
    }

  }
</script>

<style scoped>
  figure{
    float: left;
    border: 1px solid black;
  }
  figure img{
    width: 250px;
    height: 250px;
  }

</style>
