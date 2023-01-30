<template>
  <div class="orderHistory">
    <div class="mainBody">
      <div class="leftView">
        <img :src="productData.productImg" />
      </div >
      <div class="rightView">
        <ul>
          <li><h2>{{ productData.productName }}</h2></li>
          <li>color {{ productData.productColor }}</li>
          <li>RAM {{ productData.productRAM }}</li>
          <li>storage {{ productData.productStorage }}</li>
          <li>Battery {{ productData.productBattery }}</li>
          <li>Processor {{ productData.productProcessor }}</li>
        </ul>
      </div>
    </div>
    <!-- {{orderHistory}} -->
    <!-- {{productData}} -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "OrderProductComponent",
  props: {
    orderHistory: {
      type: Object,
      requied: true,
    },
  },
  data() {
    return {
      productRes: [],
      productData: [],
    };
  },
  watch: {
    productRes() {
      this.productData = this.productRes;
    },
  },
  computed: {
    ...mapGetters(["getProduct"]),
  },
  methods: {
    ...mapActions(["GET_PRODUCT"]),
  },
  mounted() {
    this.$store.dispatch("GET_PRODUCT", {
      id: this.orderHistory.productId,
      successData: (res) => {
        this.productRes = res;
      },
    });
  },
};
</script>

<style scoped>
.orderHistory {
    margin: 30px 100px;
}

.mainBody {
    display: flex;
    width: 100%;
    justify-content: center;
    flex-direction: row;
}

.rightView {
    width: 500px;
}   

img {
  height: 240px;
  width: 130px;
}

h2 {
    color: #1e6ee6;
}

ul {
    list-style: none;
}

li {
    font-size: 18px;
}

</style>
