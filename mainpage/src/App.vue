<template>
  <div id="app">
    <header-component></header-component>
    <!-- <toast-comp></toast-comp> -->
    <!-- <firebase-component></firebase-component> -->
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
// import ToastComp from "@/components/ToastComp.vue";
// import FirebaseComponent from "@/components/FirebaseComponent.vue";
import { mapGetters} from "vuex"


export default {
  components: {
    HeaderComponent,
    FooterComponent,
    // FirebaseComponent
    // ToastComp,
  },
  computed: {
    ...mapGetters(["getLoginBoolValue"])
  },
  methods: {
  },
};
</script>
<style></style>
