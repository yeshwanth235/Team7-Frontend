<template>
  <div class="loginView">
    <div class="loginViewChild">
      <div class="loginLeft">
        <h1>Merchant Login</h1>
        <p>
          Welcome <br />
          to <br />
          something
        </p>
        <a @click="loginHandler">User Portal</a>
      </div>
      <div class="loginRight">
        <div class="rightChild">
          <form @submit.prevent="loginHandler">
            <label>Email</label>
            <input type="text" v-model="formData.userEmailId">
            <label>Password</label>
            <input type="password" v-model="formData.userPassword">
            <button>Login</button> <br />
            <a @click="registerHandler">New to something? create an account</a>
          </form>
        </div>
      </div>
      <!-- {{getLoginBoolValue}} -->
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
// import {mapActions,  mapGetters} from "vuex"

export default {
  name: "MerchantLoginView",
  components: {
  },
  data() {
    return {
      formData: {
        userEmailId: "",
        userPassword: ""
      }
    };
  },
  computed: {
      ...mapGetters(["getLoginMerchant", "getMerchantLoginBool"]),
  },
  methods: {
    ...mapActions(["LOGIN_MERCHANT"]),
    registerHandler() {
      this.$router.push("/merchantRegister");
    },
    loginHandler() {
      const payloadData = this.formData;
      console.log(payloadData);
      this.$store.dispatch("LOGIN_MERCHANT", {payload: payloadData, successCall: () => {
        if(this.getMerchantLoginBool) {
        this.$router.push("/productRegistration");
      }
      }});
      console.log(this.getMerchantLoginBool)
    },
  },
  created() {
    
  },
  mounted() {
    // if(this.getLoginBoolValue) {
    //     this.$router.push("/");
    //   }
  },
  destroyed() {
    // this.$store.dispatch("RESET_LOGIN");
  }
};
</script>

<style scoped>
input {
  width: 240px;
  height: 30px;
  border-radius: 9px;
}

.loginView {
  display: flex;
  justify-content: center;
  /* border: 1px solid black; */
}

h1 {
  color: #1e6ee6;
  margin-top: 33%;
  margin-bottom: 30px;
}

.loginViewChild {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  /* margin: 50px 350px; */
  height: 400px;
  width: 800px;
  border-radius: 16px;
  /* transition: background-color 0.6s ease-in-out; */
  transition: box-shadow 0.6s ease-in-out;
  /* border: 1px solid black; */
}

.loginViewChild:hover {
  /* background: rgba(30, 110, 230, 0.3); */
  /* box-shadow: inset 0 0 10px #1e6ee6; */
  box-shadow: rgba(30, 110, 230, 0.2) 0px 4px 12px;

}

.loginLeft {
  margin: 0 30px;
  text-align: center;
  width: 400px;
  /* border: 1px solid black; */
}

.loginRight {
  display: flex;
  align-items: center;
  justify-content: center;
  /* height: 400px; */
  width: 400px;
  margin: 0 30px;
  /* border: 1px solid black; */
}

p {
  font-size: 28px;
  letter-spacing: 2px;
  line-height: 30px;
}

label {
  font-size: 20px;
}

button {
  font-size: 18px;
  margin: 12px 0;
  height: 40px;
  width: 255px;
  border-radius: 9px;
  border: none;
}

a {
  cursor: pointer;
  margin-top: 16px;
  font-size: 16px;
  text-decoration: none;
}
</style>
