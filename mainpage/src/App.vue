<template>
  <div id="app">
    <header-component></header-component>
    <nav>
      <router-link to="/"></router-link> 
      <router-link to="/products"></router-link>
    </nav>
    <router-view />
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>
<style></style>
