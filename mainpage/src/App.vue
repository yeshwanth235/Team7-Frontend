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
import {mapActions, mapGetters} from "vuex"


export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
  computed: {
    ...mapGetters(["getLoginBoolValue"])
  },
  methods: {
    ...mapActions(["RESET_LOGIN", "RESET_CART_PRODUCTS"])
  },
  destroyed() {
    // this.$store.dispatch("RESET_LOGIN");
    // this.$store.dispatch("RESET_CART_PRODUCTS");
  }
};
</script>
<style></style>
