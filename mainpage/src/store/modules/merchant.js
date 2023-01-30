import axios from "axios";

export default {
  state: {
    productMerchants: [],
    productPrice: [],
    addMerchant: false,
    loginMerchant: "",
    merchatLoginBool: false,
  },
  getters: {
    getProductMerchants: (state) => {return state.productMerchants},
    getProductPrice: (state) => {return state.productPrice},
    getAddMerchant: (state) => {return state.addMerchant},
    getLoginMerchant: (state) => {
      return state.loginMerchant;
  },
  getMerchantLoginBool: (state) => {
      return state.merchatLoginBool;
  },
  },
  mutations: {
    setProductMerchants: (state, value) => {
      state.productMerchants = value;
    },
    setProductPrice: (state, value) => {
      state.productPrice = value;
    },
    setAddMerchant: (state,value) => {
      state.addMerchant = value;
    },
    setLoginMerchant: (state, value) => {
      state.loginMerchant = value;
  },
  setMerchantLoginBool: (state, value) => {
      state.merchatLoginBool = value;
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
    async ADD_MERCHANT({commit}, {payload}) {
      const response = await axios.post("/api/Merchant/addMerchants", payload);
      console.log("Add Merchant: ",response)
      commit('setAddMerchant', response);
  },
  async LOGIN_MERCHANT({commit}, {payload, successCall}) {
    const response = await axios.post("/api/Merchant/login", payload);
    console.log(response.data);
    console.log(response.status);
    commit('setLoginMerchant', response.data)
    if(response.status === 200) {
        commit('setMerchantLoginBool', true);
        successCall();
        // this.$router.push("/")
    }
  },
  },
};
