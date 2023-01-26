import axios from "axios";

export default {
  state: {
    productMerchants: [],
    productPrice: [],
  },
  getters: {
    getProductMerchants: (state) => {return state.productMerchants},
    getProductPrice: (state) => {return state.productPrice},
  },
  mutations: {
    setProductMerchants: (state, value) => {
      state.productMerchants = value;
    },
    setProductPrice: (state, value) => {
      state.productPrice = value;
    },
  },
  actions: {
    async PRODUCT_MERCHANTS({ commit }, id) {
      const response = await axios.get(
        "/api/Merchant/getPriceStockForProduct/" + id
      );
      console.log("same product different merchant: ", response.data);
      // localStorage.setItem("merchant", JSON.stringify(response.data[0]))
      commit("setProductMerchants", response.data);
    },
    async PRODUCT_PRICE({ commit }, { id, successCallback }) {
      // console.log(successCallback);
      // debugger;
      const response = await axios.get(
        "/api/Merchant/getPriceStockForProduct/" + id
      );
      //   console.log("same product different merchant: ", response.data);
      if (response.data) {
        successCallback(response.data);
        // console.log(successCallback);
      }
      commit("setProductPrice", response.data);
    },
  },
};
