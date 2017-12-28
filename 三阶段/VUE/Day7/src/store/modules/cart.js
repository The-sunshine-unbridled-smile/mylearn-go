/**
 * Created by Administrator on 2017/12/13.
 */
//state,mutations,actions,getters

const state = {
  //商品数据
  //购物车数据
  shop_list: [{
    id: 11,
    name: '鱼香肉丝',
    price: 12,
  },
    {
    id: 22,
    name: '宫保鸡丁',
    price: 14
  },
    {
    id: 34,
    name: '土豆丝',
    price: 10
  }, {
    id: 47,
    name: '米饭',
    price: 2
  }],
  added:[]

}

const getters = {
  //对视图返回的数据 - 对视图提供的获取数据的方法
  //让视图拿到一个过滤数据 - computed方式缓存数据

  // shoplist: function(state){
  //   return state.shop_list
  // }
  shoplist: state => state.shop_list,
  cartProducts: state => state.added,
  totalPrice:(state,getters)=>{
    //ES6 遍历方式 map() forEach()
    let totalprice = 0;
    getters.cartProducts.forEach(item=>{
      totalprice += item.price * item.num
    })
    return totalprice
  },
  totalNum:(state,getters)=>{
    let totalnum = 0;
    getters.cartProducts.forEach(item=>{
      totalnum += item.num
    })
    return totalnum
  }
}

const actions = {
  //异步操作
  //添加到购物车 删除指定商品 清空购物车
  addToCart(ctx,product){
    console.log(product);
    ctx.commit("add",product)
  },

  clearAllCart(ctx){
    ctx.commit("clearAll")
  },
  delProduct(ctx,product){
    ctx.commit('del',product)
  }
}


const mutations = {
  //添加：购物车数据添加一条数据 - 修改state.购物车数据 push
  //删除指定商品: state.购物车数据.splice()
  //清空购物车: state.购物车数据 = []
  add(state,product){
    console.log("action提交到mutation---add方法")
    /*cartProducts:[{
     id: 11,
     name: '鱼香肉丝',
     price: 12,
     num:2
     }]*/
  //  1.通过action告诉我刚刚点的是谁，通过id找到商品放进去

    //找一下added有没有这一条数据
    //ES6 数组 find return
    let record = state.added.find(selfitem=>selfitem.id == product.id)
    if(record){
      record.num++
    }else{
      state.added.push({...product,num:1})
    }
    console.log(state.added);
  },
  clearAll(state){
    state.added = []
  },
  del(state,product){
    //map方法ES6 $.each
    state.added.map((item,index)=>{
      // console.log(item);
      // console.log(index)
      if(item.id === product.id){
        state.added.splice(index,1)
      }
    })
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
