<template>
  <div class="cart">
    <div class="cartProduct">
      <img :src="productData.productImg" alt="Google Pixel 6a " />
      <div class="productDetails">
        <ul>
          <li>
            <h3>{{ productData.productName }}</h3>
          </li>
          <li>{{cartProducts.merchantId}}</li>
          <li id="price">₹{{ cartProducts.productPrice }}</li>
        </ul>
        <div class="cartButton">
          <button>Remove</button>
        </div>
      </div>
    </div>
    <!-- <div class="cartPriceDetails">
            <h2>Price Details</h2>
            <p>price (1 item) 45000</p>
            <p>Delivery charge  120</p>
            <hr>
            <p>Total Amount   45120</p> -->
    <!-- </div> -->
    <!-- {{cartProducts.productId}} -->
    
    <!-- {{getProduct}} -->
    <!-- {{merchantData}} -->
    <!-- {{productData}} -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "CartProductComponent",
  props: {
    cartProducts: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      product: [],
      productData: [],
      merchantData: [],
    };
  },
  computed: {
    ...mapGetters(["getProduct", "getProductPrice", "getLoginUser"]),
  },
  methods: {
    ...mapActions(["GET_PRODUCT", "PRODUCT_PRICE"]),
  },
  watch: {
    product() {
      this.productData = this.product;
    },
  },
  mounted() {
    console.log("Product id in cartProduct Component: ",this.cartProducts.productId)
    this.$store.dispatch("GET_PRODUCT", {
      id: this.cartProducts.productId,
      successData: (res) => {
        // debugger;
        // console.log("created in cart res product data: ",res);
        this.product = res;
        // console.log("created return product data: ", this.productData);
      },
    });
    // console.log(this.getProduct)
    this.$store.dispatch("PRODUCT_PRICE", {
      id: this.cartProducts.productId,
      successCallback: (res) => {
        console.log("created in cart product merchant data: ", res);
        this.merchantData = res;
      },
    });
    // console.log("Cart Product Component: ",this.getProductMerchants)
  },
};
</script>

<style scoped>
.cart {
  display: flex;
  margin: 30px 100px 30px 0;
  flex-direction: row;
}

ul {
  list-style: none;
  margin: 0;
}

#price {
  margin: 5px;
  font-size: 20px;
}

.cartProduct {
  width: max-content;
  display: flex;
  flex-direction: row;
}

.cartProduct img {
  height: 190px;
  width: 100px;
}

img {
  margin: 20px 80px 20px 0;
}

.cartButton {
  display: flex;
  justify-content: end;
}

button {
  margin-top: 20px;
  font-size: 16px;
  background: none;
  border: none;
}

button:hover {
  color: #1e6ee6;
}
</style>
