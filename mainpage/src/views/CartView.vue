<template>
  <div class="cartView">
    <search-component class="searchDiv"></search-component>
    <h1>Cart</h1>
    <!-- <div class="cartProducts"> -->
      <div  class="cartProducts">
        <cart-product-component v-for="product in productData" :key="product.productId"
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
    </div>
    <!-- {{productData}} -->
  </div>
</template>

<script>
import CartProductComponent from "@/components/products/CartProductComponent.vue";
import SearchComponent from "@/components/SearchComponent.vue";
import PriceDetailsComponent from "@/components/products/PriceDetailsComponent.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "CartView",
  data() {
    return {
      cartData: [],
      productData: [],
    };
  },
  components: {
    CartProductComponent,
    SearchComponent,
    PriceDetailsComponent,
  },
  computed: {
    ...mapGetters(["getCartProducts", "getBuyProduct"]),
  },
  watch: {
    cartData() {
      this.productData = this.cartData.cartItemsList;
    },
  },
  methods: {
    ...mapActions(["CART_PRODUCTS", "BUY_PRODUCT"]),
    checkOutHandler() {
        console.log("Order placed")
        this.$store.dispatch("BUY_PRODUCT");
    }
  },
  created() {
    this.$store.dispatch("CART_PROUDUCTS");
  },
  mounted() {
    // console.log(this.getCartProducts)
    this.cartData = this.getCartProducts;
    console.log("Created", this.cartData.cartItemsList);
  },
};
</script>

<style scoped>
h1 {
  color: #1e6ee6;
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
