<template>
  <div>
    <product></product>
    <cart></cart>
    <info></info>
  </div>
</template>

<script>
  import product from './product.vue'
  import cart from './cart.vue'
  import info from './info.vue'
  export default {
    name: 'cartpage',
    components:{
      product,
      cart,
      info
    }
  }
</script>

<style scoped>
</style>
