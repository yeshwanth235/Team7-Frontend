<template>
  <div class="registerView">
    <div class="registerViewChild">
      <div class="registerLeft">
        <h1>Merchant Register</h1>
        <p>
          Welcome <br />
          to <br />
          something
        </p>
      </div>
      <div class="registerRight">
        <div class="registerChild">
          <form @submit.prevent="registerUser">
            <label>Name</label>
            <input v-model="formData.userName" type="text">

            <label>Email</label>
            <input v-model="formData.userEmailId" type="text">
            
            <label>Password</label>
            <input v-model="formData.userPassword" type="password">
            <button>Register</button> <br />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import {mapActions,  mapGetters} from "vuex"

export default {
  name: "MerchantRegisterView",
  components: {
  },
  data() {
    return{
      formData: {
        userEmailId: "",
        userName: "",
        userPassword: "",
      }
    };
  },
  computed: {
  },
  methods: {
  },


};
</script>

<style scoped>


input {
  width: 240px;
  height: 30px;
  border-radius: 9px;
}

.registerView {
  display: flex;
  justify-content: center;
  /* border: 1px solid black; */
}

h1 {
  color: #1e6ee6;
  margin-top: 33%;
  margin-bottom: 30px;
}

.registerViewChild {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  /* margin: 50px 350px; */
  height: 400px;
  width: 800px;
  border-radius: 13px;
  /* transition: background-color 0.6s ease-in-out; */
  transition: box-shadow 0.6s ease-in-out;
  /* border: 1px solid black; */
}

.registerViewChild:hover {
  /* background: rgba(30, 110, 230, 0.3); */
  /* box-shadow: inset 0 0 10px #1e6ee6; */
  /* box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px; */
  box-shadow: rgba(30, 110, 230, 0.2) 0px 4px 12px;
}

.registerLeft {
  margin: 0 30px;
  text-align: center;
  width: 400px;
  /* border: 1px solid black; */
}

.registerRight {
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
  margin-top: 16px;
  font-size: 16px;
  text-decoration: none;
}
</style>
