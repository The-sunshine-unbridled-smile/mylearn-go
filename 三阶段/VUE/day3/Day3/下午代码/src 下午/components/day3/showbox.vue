<template>
  <figure>
    <img :src="'/api/'+imgsrc" alt="">
    <!--<images src="../../assets/images/1.jpg" alt="">-->
    <figcaption>
      <h1>{{productTitle}}</h1>
      <h1>{{productSubtitle}}</h1>
      <h1>{{productPrice}}</h1>
    </figcaption>
    <input type="checkbox">
    <mybtn btntext="购买" btnclass="red" @clicked="buy"></mybtn>
  </figure>
</template>

<script>
  import button from '../common/button.vue'
  export default {
    name: 'showbox',
    data () {
      return {}
    },
    props: ['imgsrc', 'productTitle', 'productSubtitle', 'productPrice'],
    components: {
      mybtn: button
    },
    methods: {
      buy () {
        console.log('购买成功')
      }
    }
  }
</script>

<style scoped>
  figure{
    float:left;
    border:1px solid gray;
  }
  figure img{
    width:250px;
    height:200px;
  }
</style>
