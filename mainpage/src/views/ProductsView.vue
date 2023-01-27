<template>
    <div class="products">
        <!-- <h1>ProductsView</h1> -->
        <search-component class="searchDiv" @alter-hide="searchBar"></search-component>
        <div class="product-item">
            <product-component v-for="(product) in allProducts" 
            :key="product.productId" 
            :productData = product
            class="productMargin">
            <!-- {{product}} -->
            </product-component>
        </div>
        <!-- {{getAllProducts}}    -->
        <!-- {{productsDataOne}} -->
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
            productsDataOne: [],
            productsDataTwo: [],
        };

    },
    computed: {
        ...mapGetters(["getAllProducts"]),
        allProducts() {
            
            return this.$store.getters.getAllProducts;
        }
    },
    methods: {
        ...mapActions(["GET_ALL_PRODUCTS"]),
        search() {
            if(this.searchText.length === 0) {
                this.boolSearch = true;
                this.productsDataTwo = JSON.parse(JSON.stringify(this.prooductDataOne));
            }else {
                this.enteringText = this.searchText;
                this.productsDataTwo = this.productsDataOne.filter((item) => {
                    return item.productName.toLowerCase()
                    .includes(this.enteringText.toLowerCase());
                });
                this.boolSearch = true;
            }
        },

        searchBar(boolSearch, newValue) {
            this.enteringText = newValue;
            boolSearch = false;
            if(newValue.length >= 2) {
                this.search();
            } else {
                boolSearch = true;
                this.productsDataTwo = JSON.parse(JSON.stringify(this.prooductDataOne));
            }
        }

    },
    created: function() {
        this.$store.dispatch("GET_ALL_PRODUCTS")
        this.productsDataOne = this.getAllProducts;
        this.productsDataTwo = this.getAllProducts
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