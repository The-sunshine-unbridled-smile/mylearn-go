<template>
  <div>
    <h1>产品详情页面</h1>
    <h1>{{productdata.name}}</h1>
    <h3>{{productdata.content}}</h3>
  </div>
</template>

<script>
  export default {
    name: 'productdetail',
    data () {
      return {
        productdata: {}
      }
    },
    created () {
      console.log("detail created")
//      console.log(this.$route.query.id)
//      this.$axios.get("/product.do?id=3")

//      this.$axios.post("/api/product.do",{id:this.$route.query.id})
      this.$axios.get("/api/product.do",{params:{id:this.$route.query.id}})
        .then(resp => {
          console.log(resp)
          this.productdata = resp.data
        })

    },
    mounted () {
      console.log("detail mounted")
    },
    destroyed (){
      console.log("detail destroyed")
    },
    activated (){
      console.log("detail activated");

    },
    deactivated (){
      console.log("detail deactivated")
    }
  }
</script>

<style scoped>
</style>
