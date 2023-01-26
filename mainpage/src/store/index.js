import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import products from './modules/products'
import merchant from './modules/merchant'
import user from './modules/user'
import cart from './modules/cart'

export default new Vuex.Store({
  modules: {
    products,
    merchant,
    cart,
    user,
  }
})
