import axios from "axios"

export default {
    state: {
        AllProducts: [],
        product: 0,
        isLogged: true,
        searchProduct: [],
    },
    getters: {
        getAllProducts: (state) => {return state.AllProducts},
        getProduct: (state) => {return state.product},
        getSearchProduct: (state) => {return state.searchProduct}
    },
    mutations: {
        setAllProducts(state, value) {
            state.AllProducts = value
        },
        setProduct(state, value) {
            state.product = value
        },
        setSearchProduct(state, value) {
            state.searchProduct = value
        }
    },
    actions: {
        GET_ALL_PRODUCTS:  async ({commit}) => {
            // debugger;
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
        },
        GET_SEARCH_PRODUCT: async({commit}, {searchTerm}) => {
            console.log("searchTerm", searchTerm)
            const response = await axios.get("/api/Products/searchProducts/"+searchTerm);
            console.log(response)
            commit('setSearchProduct', response.data)
        }
    },
}