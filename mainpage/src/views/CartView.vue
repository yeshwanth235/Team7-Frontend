<template>
  <div class="cartView">
    <search-component class="searchDiv"></search-component>
    <h1>Cart</h1>
    <div v-if="getLoginBoolValue">
      <!-- <div class="cartProducts"> -->
      <div class="cartProducts">
        <cart-product-component
          v-for="product in productData"
          :key="product.productId"
          :cartProducts="product"
        ></cart-product-component>
      </div>
      <div>
        <price-details-component></price-details-component>
      </div>
      <!-- </div> -->
      <hr />
      <div class="button">
        <button @click="checkOutHandler">Place Order</button>
        <div v-if="show" class="toast-container">
      <div class="toast-message">{{ message }}</div>
    </div>
      </div>
      <!-- {{productData}} -->
    </div>
    <div v-else>
      <div class="cartviewLogin">
        <p>User Login Needed</p>
        <a @click="loginHandler" id="login">Login</a>
      </div>
    </div>
  </div>
</template>

<script>
import CartProductComponent from "@/components/products/CartProductComponent.vue";
import SearchComponent from "@/components/SearchComponent.vue";
import PriceDetailsComponent from "@/components/products/PriceDetailsComponent.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "CartView",
  props: {
    message: {
      type: String,
      default: "order placed",
    },
  },
  data() {
    return {
      cartData: [],
      productData: [],
      show: false
    };
  },
  components: {
    CartProductComponent,
    SearchComponent,
    PriceDetailsComponent,
  },
  computed: {
    ...mapGetters([
      "getCartProducts",
      "getBuyProduct",
      "getLoginUser",
      "getLoginBoolValue",
    ]),
  },
  watch: {
    cartData() {
      this.productData = this.cartData.cartItemsList;
    },
  },
  methods: {
    ...mapActions(["CART_PRODUCTS", "BUY_PRODUCT", "RESET_CART_PRODUCTS"]),
    checkOutHandler() {
      console.log("Order placed");
      console.log(this.cartItemsList.length())
      if (this.getLoginBoolValue && this.cartProducts?.length!==0) {
        this.$store.dispatch("BUY_PRODUCT", { userId: this.getLoginUser });
      }
      else {
        window.alert("cart is empty")
      }
      this.show = true;
      setTimeout(() => {
        this.show = false;
      }, 2000);
    },
    loginHandler() {
      this.$router.push("/login")
    }
  },
  created() {
    if (this.getLoginBoolValue) {
      this.$store.dispatch("CART_PROUDUCTS", { userId: this.getLoginUser });
    }
  },
  mounted() {
    // console.log(this.getCartProducts)
    this.cartData = this.getCartProducts;
    console.log("Created", this.cartData.cartItemsList);
  },
  destroyed() {
    // this.$store.dispatch("RESET_CART_PRODUCTS");
  },
};
</script>

<style scoped>
h1 {
  color: #1e6ee6;
}

#login {
  cursor: pointer;
}

.cartviewLogin {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 200px;
  width: 100%;
  font-size: 28px;
}

.searchDiv {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 40px 0;
}

.cartView {
  margin: 30px 170px;
}

.cartProducts {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

.cartLeft {
  display: flex;
  flex-direction: column;
}

.button {
  display: flex;
  justify-content: flex-end;
}

button {
  border: none;
  background: none;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
  color: #1e6ee6;
}

button:hover {
  color: black;
}
</style>
