<template>
    <div class="products">
        <!-- <h1>ProductsView</h1> -->
        <search-component class="searchDiv"></search-component>
        <div class="product-item">
            <product-component v-for="(product) in allProducts" 
            :key="product.productId" 
            :productData = product
            class="productMargin">
            {{product}}
            </product-component>
        </div>
        <!-- {{getAllProducts}}    -->
    </div>
    
</template>


<script>
import ProductComponent from "@/components/products/ProductComponent.vue"
import SearchComponent from "@/components/SearchComponent.vue"
import {mapActions,  mapGetters} from "vuex"

export default {
    name: "ProductsView",
    components: {
        ProductComponent,
        SearchComponent,
    },
    data() {
        return {
            value: [
                1
            ],
        };
    },
    computed: {
        ...mapGetters(["getAllProducts"]),
        allProducts() {
            return this.$store.getters.getAllProducts;
        }
    },
    methods: {
        ...mapActions(["GET_ALL_PRODUCTS"])
    },
    created: function() {
        this.$store.dispatch("GET_ALL_PRODUCTS")
    }
}
</script>

<style scoped>

.searchDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 40px 0;
}

 .products {
    margin: 30px 170px;
    height: max-content;
 }

 .product-item {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
 }

</style>