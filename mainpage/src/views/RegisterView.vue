<template>
<div class="registerView">
  <div class="registerViewChild">
    <div class="registerLeft">
      <h1>Register</h1>
      <p>
        Welcome <br />
        to <br />
        something
      </p>
    </div>
    <div class="registerRight">
      <div class="registerChild">
        <label>Email</label>
        <input-component></input-component>
        <label>Password</label>
        <input-component></input-component>
        <button>Register</button> <br />
      </div>
    </div>
  </div>
</div>
  
</template>

<script>
import InputComponent from "@/components/InputComponent.vue";

export default {
  name: "RegisterView",
  components: {
    InputComponent,
  },
};
</script>

<style scoped>

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
  border-radius: 7px;
  transition: background-color 0.6s ease-in-out;
  /* border: 1px solid black; */
}

.registerViewChild:hover {
  background: rgba(30, 110, 230, 0.3);
  /* box-shadow: inset 0 0 10px #1e6ee6; */
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
