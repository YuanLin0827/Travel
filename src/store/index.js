import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations
  // actions: {
  //   changeCity (ctx, city) { //ctx为当前作用域
  //     ctx.commit('changeCity', city)
  //   }
  // },
  // getters: { // 相当于计算属性
  //   doubleCity (state) {
  //     return state.city + ' ' + state.city
  //   }
  // }
  // modules: { //代码拆分
  //   state: {},
  //   mutations: {},
  // }
})
