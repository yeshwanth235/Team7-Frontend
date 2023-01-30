<template>
  <div class="addProduct">
    <form @submit.prevent="submitForm">
    <div></div>
    <div class="form">
      <h1>Add Product</h1>
      
        <span>merchantId : </span>
        <input-component
          v-model="formData.merchantId"
          type="String"
          placeholder="merchantId"
        />
        <span>productName : </span>
        <input-component
          v-model="formData.productName"
          type="text"
          placeholder="productName"
        />
        <span>productColor : </span>
        <input-component
          v-model="formData.productColor"
          type="text"
          placeholder="productColor"
        />
        <span>productRAM : </span>
        <input-component
          v-model="formData.productRAM"
          type="text"
          placeholder="productRAM"
        />
        <span>productStorage : </span>
        <input-component
          v-model="formData.productStorage"
          type="text"
          placeholder="productStorage"
        />
        <span>productBattery : </span>
        <input-component
          v-model="formData.productBattery"
          type="text"
          placeholder="productBattery"
        />
        <span>productProcessor : </span>
        <input-component
          v-model="formData.productProcessor"
          type="text"
          placeholder="productProcessor"
        />
        <span>productImg : </span>
        <input-component
          v-model="formData.productImg"
          type="url"
          placeholder="productImg"
        />
        <span>price : </span>
        <input-component
          v-model="formData.productPrice"
          type="text"
          placeholder="price"
        />
        <span>stock : </span>
        <input-component
          v-model="formData.productStock"
          type="text"
          placeholder="stock"
        />
        <button type="submit">Submit</button>
    </div>
      </form>

  </div>

</template>
<script>
import axios from "axios";
import { mapActions } from "vuex";
import InputComponent from "@/components/InputComponent.vue";
export default {
  name: "MerchantProductForm",
  data() {
    return {
      formData: {
        merchantId: "",
        productName: "",
        productColor: "",
        productRAM: "",
        productStorage: "",
        productBattery: "",
        productProcessor: "",
        productImg: "",
        price: 0,
        stock: 0,
      },
    };
  },
  components: {
    InputComponent,
  },
  methods: {
    ...mapActions(["SET_MERCHANT_PRODUCTS"]),
    submitForm() {
      axios
        .post(
          "/api/Merchant/addProductDTO?merchantId=" +
            this.formData.merchantId +
            "&productName=" +
            this.formData.productName +
            "&productColor=" +
            this.formData.productColor +
            "&productRAM=" +
            this.formData.productRAM +
            "&productStorage=" +
            this.formData.productStorage +
            "&productBattery=" +
            this.formData.productBattery +
            "&productProcessor=" +
            this.formData.productProcessor +
            "&productImg=" +
            this.formData.productImg +
            "&price=" +
            this.formData.price +
            "&stock=" +
            this.formData.stock
        )
        .then((response) => {
          console.log(response);
          this.SET_MERCHANT_PRODUCTS(response);
        })
        .catch((error) => {
          console.log("inside post method ", error);
        });
    },
  },
};
</script>
<style scoped>
.registerView {
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* border: 1px solid black; */
}

h1 {
  color: black;
  /* margin-top: 33%; */
  margin-bottom: 30px;
}

.addProduct {
  display: flex;
  justify-content: center;
  align-items: center;
}

p {
  font-size: 28px;
  letter-spacing: 2px;
  line-height: 30px;
}

label {
  color: #1e6ee6;
  font-size: 20px;
}

button {
  font-size: 18px;
  margin: 12px 0;
  height: 40px;
  width: 255px;
  border-radius: 9px;
  border: none;
}
</style>
