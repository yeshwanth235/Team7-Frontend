<template>
    <div class="cartPriceDetails">
            <h2>Price Details</h2>
            <p>price {{itemsLength}} items {{productPrice}}</p>
            <!-- <p>Delivery charge  120</p> -->
            <hr>
            <h3  v-if="productPrice">Total Amount   {{productPrice}}</h3>
            <h3 v-else>Total Amount   {{productPrice}}</h3>

            <!-- {{getCartProducts}} -->
            <!-- {{cartProducts}} -->
            <!-- {{productPrice}} -->
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "PriceDetailsComponent",
    data() {
        return {
            cartProducts: [],
            // itemsLength: 0,
        };
    },
    computed: {
        ...mapGetters(["getCartProducts"]),
        productPrice() {
            let price =0;
            for(let i=0; i<this.itemsLength; i++) {
                price = price + this.cartProducts[i].productPrice * this.cartProducts[i].productQuantity;
            }
            return price;
        },
        itemsLength() {
            if(this.cartProducts?.length === 0 || undefined) {
                return 0;
            }
            return this.cartProducts?.length;
        }
    },
    methods: {
        
    },
    created() {
        this.cartProducts = this.getCartProducts.cartItemsList;
    }
}
</script>

<style scoped>
.cartPriceDetails{
    text-align: right;
}

p {
    font-size: 16px;
}
</style>