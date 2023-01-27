<template>
  <header>
    <a href="/" @click="homeHandler" id="logo">Something</a>
      <div class="nav-bar">
        <nav>
          <ul>      
            <li><a @click="mobileHandler">Mobiles</a></li>
            <li><a @click="cartHandler">cart</a></li>
            <li v-if="getLoginBoolValue"><a @click="orderHistoryHandler">Orderhistory</a></li>
            <li v-if="getLoginBoolValue"><a @click="logoutHandler">Logout</a></li>
            <li v-else><a @click="loginHandler">Login/signup</a></li>
          </ul>
        </nav>
      </div>
  </header>
</template>

<script>
import { mapGetters, mapActions} from "vuex"

export default {
  name: "HeaderComponent",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getLoginBoolValue"])
  },
  methods: {
    ...mapActions(["RESET_LOGIN"]),
    homeHandler() {
      this.$router.push("/")
    },
    mobileHandler() {
      this.$router.push("/products")
    },
    cartHandler() {
      this.$router.push("/carts")
    },
    loginHandler() {
      this.$router.push("/login")
    },
    orderHistoryHandler() {
      this.$router.push("/orderHistory")
    },
    logoutHandler() {
      this.$store.dispatch("RESET_LOGIN");
    },
  }
};
</script>

<style scoped>
header {
  height: 100px;
  /* background-color: #34abeb; */
}

#logo {
  font-size: 30px;
  position: relative;
  top: 42px;
  left: 35px;
  display: inline;
}
.nav-bar {
  float: right;
}
ul {
  list-style: none;
  margin-right: 30px;
}

li {
  padding-top: 34px;
  font-size: 25px;
  float: left;
  margin: 0 30px;
}

a {
  cursor: pointer;
  color: #1e6ee6;
  text-decoration: none;
}

</style>
