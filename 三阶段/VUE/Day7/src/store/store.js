/*1. vuex框架配置
* vue vuex*/
import Vue from 'vue'
import Vuex from 'vuex'

/*2.VUE使用VUEX*/
Vue.use(Vuex)

//存数据的地方
const state={
  count: 10
}

//直接操作state - 修改
//state的数据只有mutations才能修改
const mutations = {
    increment(state,n){
      state.count += n
    }
}

const actions = {
  increment(ctx,n){
    ctx.commit("increment",10)
  },
  //决定什么时候/条件下再去调用mutation
  //action 不会修改state
  incrementAsync(ctx,n){
    //ctx - 刚刚用户的操作 - $store =>通过ctx进行提交commit--》操作mutation
    setTimeout(function(){
      ctx.commit("increment",n)
    },1000)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
