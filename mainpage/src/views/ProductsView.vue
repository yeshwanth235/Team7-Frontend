<template>
    <div class="products">
        <!-- <h1>ProductsView</h1> -->
        <search-component class="searchDiv"></search-component>
        <div class="product-item">
            <product-component v-for="(product) in getAllProducts" 
            :key="product.productId" 
            :productData = product
            class="productMargin">
            <!-- {{product}} -->
            </product-component>
        </div>
        <!-- {{getSearchProduct}} -->
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
            boolSearch: true,
            enteringText: "",
            searchText: "",
        };
    },
    computed: {
        ...mapGetters(["getAllProducts", "getSearchProduct"]),
        SearchProducts() {
            return this.$store.getters.getSearchProduct;
        }, 
    },
    methods: {
        ...mapActions(["GET_ALL_PRODUCTS"]),
    },
    created: function() {
        this.$store.dispatch("GET_ALL_PRODUCTS")
        // console.log(this.productsDataOne)
    },
    mounted() {
        const products =() => {this.productDataOne = this.getAllProducts}
        products();
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