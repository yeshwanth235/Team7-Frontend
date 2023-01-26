<template>
  <div class="home">
    <slider-component></slider-component>
    <search-component class="searchDiv"></search-component>
    <brands-component></brands-component>
  </div>
</template>
<script>
// @ is an alias to /src

import SearchComponent from "@/components/SearchComponent.vue";
import SliderComponent from "@/components/home/SliderComponent.vue";
import BrandsComponent from "@/components/home/BrandsComponent.vue";
export default {
  name: "HomeView",
  components: {
    SearchComponent,
    SliderComponent,
    BrandsComponent,
  },
};
</script>

<style scoped>

/* css for search */
.searchDiv {
    height: 383px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
    border-top: 3px solid rgba(40, 69, 163, 0.4);
    border-bottom: 3px solid rgba(40, 69, 163, 0.4);
}


</style>
