<template>
  <div>
    <h1>cart组件 - 已选商品</h1>
    <el-table
      :data="cartProducts"
      style="width: 100%"
      empty-text="你的购物车空空如也。。。"
    >
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
        prop="num"
        label="数量"
        width="180"
        align="center">
        <template slot-scope="scope">
          <el-input-number v-model="scope.row.num" :min="1" label="描述文字"></el-input-number>
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        width="180"
        align="center">
        <template slot-scope="scope">
          <el-button @click="delProduct(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'
  export default {
    name: 'vcart',
    data(){
      return {
      }
    },
    methods:{
//      delProduct(){}
      ...mapActions(['delProduct'])
    },
    computed:{
      ...mapGetters(['cartProducts','addToCart'])
    }
  }
</script>

<style scoped>
</style>
