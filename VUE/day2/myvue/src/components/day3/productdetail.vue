<template>
  <div>
    <h1>产品详情页</h1>
    <h2>{{productdata.name}}</h2>
    <h3>{{productdata.content}}</h3>
  </div>
</template>
<script>
  export default {
    name: "productdetail",
    data (){
      return{
        productdata:{},

      }
    },
    created (){
      this.$axios.get("/api/product.do",{params:{id:this.$route.query.id}})
        .then(resp=>{
            console.log(resp)
            this.productdata=resp.data
        })
    },
  }
</script>

<style scoped>
</style>
