<template>
<div class="searchDiv">
    <div ><input type="text" placeholder="Search mobiles" v-model="content"/> <button @click="searchHandler"><i class="icon-search"></i></button></div>
    
    <p>Something place where all mobiles are avaliable</p>
</div>
    
</template>


<script>
import {mapActions,  mapGetters} from "vuex"

export default {

    name:"SearchComponent",
    data() {
        return {
            content: "",
            searchData: "",
        };
    },
    computed: {
        ...mapGetters(["getSearchProduct"])
    },
    watch: {
        content() {
            this.searchData = this.content;
        }
    },
    methods: {
        ...mapActions(["GET_SEARCH_PRODUCT"]),
        searchHandler() {
            console.log("search component ",this.searchData)
            this.$store.dispatch("GET_SEARCH_PRODUCT", {searchTerm: this.searchData});
        }
    },
    created() {
    }
}
</script>


<style scoped>
p {
    font-size: 20px;
    padding-top: 10px;
}

input {
    height: 38px;
    width: 430px;
    margin: 0 10px 6px 10px;
    border-radius: 11px;
}

input::placeholder {
    top: 10px;
    margin-left: 50px;
    font-size: 20px;
}

button {
    font-size: 30px;
    position: relative;
    right: 50px;
    bottom: 4px;
    border: none;
    background: none;
    opacity: 0.8;
} 
</style>