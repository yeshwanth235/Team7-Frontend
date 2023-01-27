<template>
    <div class="order">
        <h2>OrderHistory</h2>
        <div>
            <order-product-component v-for="(product, i) in productData" :key="i" :orderHistory="product">
            </order-product-component> 
            <!-- {{getOrderHistory}} -->
            <!-- {{productData[0]}} -->
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
// import productComponent from "../components/products/ProductComponent.vue";
import OrderProductComponent from "@/components/products/OrderProductComponent.vue";

export default {
    name: "OrderHistoryView",
    components: {
        OrderProductComponent
    },
    data() {
        return {
            productRes: [],
            productData: [],
        };
    },
    computed: {
        ...mapGetters(["getOrderHistory", "getLoginUser"])
    },
    watch: {
        productRes(){
            this.productData = this.productRes
        },
    },
    methods: {
        ...mapActions(["ORDER_HISTORY"])
    },
    mounted() {
        // debugger;
        this.$store.dispatch("ORDER_HISTORY", {userId: this.getLoginUser})
        this.productRes = this.getOrderHistory
        // console.log("In mounted of orderhistory: ", this.getOrderHistory)
    },
}
</script>

<style scoped>

.order {
    margin: 30px 270px 60px 270px;
}

</style>