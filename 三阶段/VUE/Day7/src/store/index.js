/**
 * Created by Administrator on 2017/12/13.
 */
//实例化Vuex.Store对象并且导出
//把所有的模块引入

import Vue from 'vue'
import Vuex from 'vuex'

import cart from './modules/cart'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cart
  }
})
