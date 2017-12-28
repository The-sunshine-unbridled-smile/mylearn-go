<template>
  <div>
    <h1>Product组件- 商品信息</h1>
    <el-table
      :data="shoplist"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="ID"
        width="180"
        align="center">
      </el-table-column>
      <el-table-column
        prop="name"
        label="商品名称"
        align="center"
        >
      </el-table-column>
      <el-table-column
        prop="price"
        label="价格"
        width="180"
        align="center">
      </el-table-column>
      <el-table-column
        label="操作"
        width="180"
        align="center"
      >
        <template slot-scope="scope">
          <el-button @click="addToCart(scope.row)" type="text" size="small">添加到购物车</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex';
  export default {
    name: 'vproduct',
    data(){
      return {

      }
    },
    methods:{
//      addToCart(){}
      ...mapActions(['addToCart'])
    },
    computed:{
//
//        shoplist:function(){
//        //拿到getter
//        return this.$store.getters.shoplist
//
// }
      ...mapGetters(['shoplist'])
    }
  }
</script>

<style scoped>
</style>
