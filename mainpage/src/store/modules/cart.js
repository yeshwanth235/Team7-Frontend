import axios from "axios";

export default {
    state: {
        addToCart: [],
        buyProduct: [],
        cartProducts: [],
    },
    getters: {
        getAddToCart(state) {return state.addProduct},
        getBuyProduct(state) {return state.buyProduct},
        getCartProducts(state) {return state.cartProducts},
    },  
    mutations: {
        setAddToCart(state, value) {
            state.addProduct = value;
        },
        setBuyProduct(state, value) {
            state.buyProduct = value;
        },
        setCartProducts(state, value) {
            state.cartProducts = value;
        },
        resetCartProducts(state) {
            state.cartProducts = [];
        }
    },
    actions: {
        async ADD_TO_CART({commit}, {userId, merchantId, productId, productPrice}) {
            // {merchantId, productId, productPrice}
            // /cart/addToCart/{userId}/{merchantId}/{productId}/{productQuantity}/{productPrice}
            // debugger;
            // console.log(JSON.stringify(merchantId))
            const user = encodeURIComponent(userId);
            const response = await axios.post(('/api/cart/addToCart/'+user+'/'+merchantId+'/'+productId+'/'+productPrice));
            // const payload = {merchantId: }
            // const response = await axios.post('/api/cart/addToCart/abc%40gmail.com/6a8ca245-6d89-417e-809d-76dae91401ee/4b83a3b1-f96f-459f-89dd-84d5dd506248/11999');
            // axios.post("/api/cart/addTocart", payload)
            // cart/addToCart/abc%40gmail.com/123/1123/123
            console.log("In cart add to cart",response);
            commit('setAddToCart', response);
        },
        async BUY_PRODUCT({commit}, {userId}) {
            const user = encodeURIComponent(userId);
            const response = await axios.post('api/cart/checkout/'+user);
            console.log('Buy Product', response)
            commit('setBuyProduct', response)
        },
        async CART_PROUDUCTS({commit}, {userId}) {
            const user = encodeURIComponent(userId);
            const response = await axios.get("api/cart/showCart/"+user);
            console.log("User Cart Products: ", response.data.cartItemsList)
            commit('setCartProducts', response.data);
        },
        RESET_CART_PRODUCTS({commit}) {
            commit('resetCartProducts')
        }
    }
}