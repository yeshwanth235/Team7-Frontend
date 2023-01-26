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
        }
    },
    actions: {
        async ADD_TO_CART({commit}, {merchantId, productId, productPrice}) {
            // {merchantId, productId, productPrice}
            // /cart/addToCart/{userId}/{merchantId}/{productId}/{productQuantity}/{productPrice}
            // debugger;
            // console.log(JSON.stringify(merchantId))
            const userId = encodeURIComponent('m.yeshwanth235@gmail.com');
            const response = await axios.post(('/api/cart/addToCart/'+userId+'/'+merchantId+'/'+productId+'/'+productPrice));
            // const payload = {merchantId: }
            // const response = await axios.post('/api/cart/addToCart/abc%40gmail.com/6a8ca245-6d89-417e-809d-76dae91401ee/4b83a3b1-f96f-459f-89dd-84d5dd506248/11999');
            // axios.post("/api/cart/addTocart", payload)
            // cart/addToCart/abc%40gmail.com/123/1123/123
            console.log("In cart add to cart",response);
            commit('setAddToCart', response);
        },
        async BUY_PRODUCT({commit}) {
            const userId = encodeURIComponent('m.yeshwanth235@gmail.com');
            const response = await axios.post('api/cart/checkout/'+userId);
            console.log('Buy Product', response)
            commit('setBuyProduct', response)
        },
        async CART_PROUDUCTS({commit}) {
            const userId = encodeURIComponent('m.yeshwanth235@gmail.com');
            const response = await axios.get("api/cart/showCart/"+userId);
            console.log("User Cart Products: ", response.data.cartItemsList)
            commit('setCartProducts', response.data);
        }
    }
}