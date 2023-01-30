export default {
    state: {
      merchantProducts: [],
    },
    getters: {
      getMerchantProducts: (state) => state.merchantProducts,
    },
    mutations: {
      setMerchantProducts: (state, value) => (state.merchantProducts = value),
    },
    actions: {
      SET_MERCHANT_PRODUCTS: ({ commit }, merchantProducts) => {
        commit("setMerchantProducts", merchantProducts);
      },
    },
  };