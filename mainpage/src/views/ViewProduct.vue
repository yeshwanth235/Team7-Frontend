<template>
  <div class="viewproduct">
    <search-component class="searchDiv"></search-component>
    <div class="productDetails">
      <div class="viewOne">
        <img :src="getProduct.productImg" :alt="getProduct.productName" />
        <br />
        <button>
          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          <a  @click="addToCartHandler">Add To Cart</a>
        </button>
        <div v-if="show" class="toast-container">
      <div class="toast-message">{{ message }}</div>
    </div>
        <!-- <button @click="buyHandler"><i class="icon-inr"></i>Buy Now</button> -->
      </div>
      <div class="viewTwo">
        <h2>{{ getProduct.productName }}</h2>
        <ul class="merchant">
          <li v-for="(merchant, i) in getProductMerchants" :key="merchant.merchantId">
            <span>price: </span>
            <p id="price">{{`₹`+merchant.productPrice + ` `}}</p>
            <span>{{`merchant`+(i+1)+` `}}</span>
            <span>stock: </span>
            <p>{{merchant.productStock}}</p>
          </li>
        </ul>
        <!-- <li><i class="icon-inr"></i> 45000</li> -->
        <!-- <li>Rating</li> -->
        <h3>Description</h3>
        <ul>
          <li>RAM: {{ getProduct.productRAM }}</li>
          <li>Storage: {{ getProduct.productStorage }}</li>
          <li>Battery: {{ getProduct.productBattery }}</li>
          <li>Processor: {{ getProduct.productProcessor }}</li>
        </ul>
        <!-- {{getAddToCart}} -->
        <!-- {{Data}} -->
        <!-- {{merchant}} -->
      </div>
      <!-- {{product}} -->
      <!-- {{getProductMerchants}} -->
      <!-- {{ sortedMerchants }} -->
      <!-- {{merchant}} -->
    </div>
  </div>
</template>

<script>
import SearchComponent from "@/components/SearchComponent.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ViewProductComponent",
  props: {
    message: {
      type: String,
      default: "clicked",
    },
  },
  components: {
    SearchComponent,
  },
  data() {
    return {
      Data: [],
      merchant: {},
      // user: "",
      show: false,
    };
  },
  computed: {
    ...mapGetters(["getProduct", "getProductMerchants", "getAddToCart", "getLoginUser"]),
    sortedMerchants() {
      let sortedData = [];
      sortedData = this.sortedArray(this.getProductMerchants)
      return sortedData;
    }
  },
  methods: {
    ...mapActions(["GET_PRODUCT", "PRODUCT_MERCHANTS", "ADD_TO_CART", "PRODUCT_PRICE"]),
    sortedArray(arr) {
        const sorted = (p1, p2) => {
          return p1.productPrice - p2.productPrice;
        };
       return arr.sort(sorted)
    },
    addToCartHandler() {
      // this.$route.push("/carts")
      // console.log("merchant in handler", this.merchant)
      // debugger;
      // this.user = this.getLoginUser;
      console.log(this.getLoginUser)
      this.$store.dispatch("ADD_TO_CART", {
        userId: this.getLoginUser,
        merchantId: this.merchant.merchantId,
        productId: this.$route.params.id,
        productQuantity: 1,
        productPrice: this.merchant.productPrice });
        this.show = true;
        setTimeout(() => {
          this.show = false;
        } , 1000);
    },
    // buyHandler() {
    //   this.$store.dispatch("BUY_PRODUCT")
    // }
  },
  watch: {
    Data() {
      this.merchant = this.Data[0];
    }
  },
  created() {   
    this.$store.dispatch("GET_PRODUCT", {id: this.$route.params.id, successData: (res) => {
      res
    }});
    this.$store.dispatch("PRODUCT_MERCHANTS", this.$route.params.id);
    this.$store.dispatch("PRODUCT_PRICE", {id: this.$route.params.id, successCallback: (res)=>{
      // console.log(res);
      this.Data = res
    }})
  },
  mounted() {
    // console.log("IN CREATED ", this.merchant)
    // this.$store.dispatch("ADD_TO_CART", {
    //     merchantId: this.Data.merchantId,
    //     productId: this.$route.params.id,
    //     productQuantity: 1,
    //     productPrice: this.merchant.productPrice });
  }
};
</script>

<style scoped>
.searchDiv {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 25px 0;
}

.productDetails {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 110px 0 110px 0;
}

.productDetails li {
  font-size: 18px;
}

.viewProduct {
  margin: 60px 60px;
  height: calc(100vh - 250px);
}

.merchant p {
  font-size: 13px;
  display: inline;
}

.merchant span {
  margin-left: 10px;
  font-size: 13px;
  color: rgb(173, 166, 166)
}

.merchant li {
  margin: 0px;
  padding: 0px;
}


#price {
  font-size: 20px;
}

img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 290px;
  width: 150px;
}

h2 {
  color: #1e6ee6;
}

button {
  font-size: 18px;
  letter-spacing: 1px;
  margin: 0 30px;
  height: 40px;
  width: 180px;
  border-radius: 8px;
  border: none;
}

a {
  cursor: pointer;
  color: black;
  font-weight: bold;
  text-decoration: none;
  text-decoration-color: none;
}

a:hover {
  color: #1e6ee6;
}

ul {
  list-style: none;
  margin: 0;
}

li {
  list-style: none;
  line-height: 30px;
}

.viewOne {
  margin-left: 150px;
}

.viewTwo {
  margin-right: 15%;
}
</style>
