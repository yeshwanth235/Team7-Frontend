import axios from "axios"

export default {
    state: {
        AllProducts: [],
        product: 0,
        isLogged: true,
    },
    getters: {
        getAllProducts: (state) => {return state.AllProducts},
        getProduct: (state) => {return state.product},
    },
    mutations: {
        setAllProducts(state, value) {
            state.AllProducts = value
        },
        setProduct(state, value) {
            state.product = value
        }
    },
    actions: {
        GET_ALL_PRODUCTS:  async ({commit}) => {
            const response = await axios.get("/api/Products/getAllProducts");
            console.log("Get All Products",response.data);
            commit('setAllProducts', response.data)
        }, 
        GET_PRODUCT: async({commit}, {id, successData}) => {
            // debugger;
            const response = await axios.get("/api/Products/findoneProduct/"+id);
            if(response.data) {
                successData(response.data)
            }
            console.log("Product", response.data)
            commit('setProduct', response.data)
        }
    },
}