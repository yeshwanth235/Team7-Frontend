<template>
  <div class="loginView">
    <div class="loginViewChild">
      <div class="loginLeft">
        <h1>Login</h1>
        <p>
          Welcome <br />
          to <br />
          something
        </p>
      </div>
      <div class="loginRight">
        <div class="rightChild">
          <form @submit.prevent="loginHandler">
            <label>Email</label>
            <input type="text" v-model="formData.userEmail">
            <label>Password</label>
            <input type="password" v-model="formData.userPassword">
            <button>Login</button> <br />
            <a @click="registerHandler">New to something? create an account</a>
            <p id="or">or</p>
            <a id="merchant" @click="merchantHandler">Merchant Portal</a>
          </form>
        </div>
      </div>
      {{getLoginBoolValue}}
    </div>
  </div>
</template>

<script>
import {mapActions,  mapGetters} from "vuex"

export default {
  name: "LoginView",
  components: {
  },
  data() {
    return {
      formData: {
        userEmail: "",
        userPassword: ""
      }
    };
  },
  computed: {
      ...mapGetters(["getLoginUser", "getLoginBoolValue"]),
  },
  methods: {
    ...mapActions(["LOGIN_USER", "RESET_LOGIN"]),
    registerHandler() {
      this.$router.push("/register");
    },
    loginHandler() {
      const payloadData = this.formData;
      console.log(payloadData);
      this.$store.dispatch("LOGIN_USER", {payload: payloadData});
      console.log(this.getLoginBoolValue)
      // if(this.getLoginBoolValue) {
      //   this.$router.push("/");
      // }
    },
    merchantHandler() {
      this.$router.push("/merchantLogin")
    } 
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

#or {
  margin-left: 120px;
  font-size: 19px;
}

#merchant {
  margin-top: 10px;
  margin-left: 80px;
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
  width: 410px;
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
