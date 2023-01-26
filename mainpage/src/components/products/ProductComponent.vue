<template>
  <div class="product">
    <h4>{{ productData.productName }}</h4>
    <img :src="productData.productImg" :alt="productData.productName" />
    <div class="descrption">
      <ul>
        <li id="price"><strong>Price</strong> {{merchant.productPrice}} </li>
        <li><strong>Color</strong> {{productData.productColor}}</li>
      </ul>
      <button @click="productDetailsHandler">
        <a @click="productDetailsHandler"
          >View Product</a
        >
      </button>
      <!-- {{merchantData}} -->
      <!-- {{dataLength}} -->
      <!-- {{Data.length}} -->
      <!-- {{merchant}} -->
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: "ProductComponent",
  props: {
    productData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return{
      Data: [],
      merchant: {},
    };
  },
  computed: {
    ...mapGetters["getProductPrice"],
    // merchantData() {
    //   return this.$store.getters.getProductMerchants;
    // },
    dataLength() {
      return this.$store.getters.getProductPrice.length()
    }
  },
  watch: {
    Data() {
      this.merchant = this.Data[this.Data.length-1];
    }
  },
  methods: {
    ...mapActions["PRODUCT_PRICE"],
    productDetailsHandler() {
      // console.log("productDetailsHanlder Called");
      this.$router.push("/productDetails/"+this.productData.productId);
    },
    sortedArray(arr) {
        const sorted = (p1, p2) => {
          return p1.productPrice - p2.productPrice;
        };
       return arr.sort(sorted)
    }
  },
  created() {
    // console.log(this.productData);
    this.$store.dispatch('PRODUCT_PRICE', {id: this.productData.productId, successCallback: (res)=>{
        this.Data = res;
    }})
    // console.log("In created productcomponent " , this.getProductMerchants);
  }
};
</script>

<style scoped>
.productMargin:nth-child(3n-1) {
  margin-right: 120px;
  margin-left: 120px;
}

.product {
  height: 350px;
  width: 280px;
  margin-bottom: 60px;
  /* border: 1px solid black; */
}

h4 {
  text-align: center;
}

img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  height: 190px;
  width: 100px;
}

ul {
  margin: 0;
  list-style: none;
}

li {
  margin-left: 10px;
}

a {
  text-decoration: none;
  color: none;
}

button {
  font-size: 16px;
  position: relative;
  color: black;
  right: 10px;
  bottom: 40px;
  float: right;
  height: 40px;
  width: 120px;
  border-radius: 5px;
  border: none;
}

button:hover {
  color: #1e6ee6;
}
</style>
