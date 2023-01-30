import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Vue.config.productionTip = false

// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/database";
// import "firebase/compat/firestore";
// import axios from "axios";
// Vue.prototype.$http = axios;
// Vue.config.productionTip = false;
// import "firebase/compat/database";

// Vue.prototype.$axios = axios;
// Vue.config.productionTip = false;
// Vue.prototype.$globalData = {
//   userLogin: false,
//   userMail: "",
// };

// const firebaseConfig = {
//   apiKey: "AIzaSyBIQ53wSg0nA2KIsXJFF9AG5HPuNpr7YM0",
//   authDomain: "ecommerce1-15a91.firebaseapp.com",
//   projectId: "ecommerce1-15a91",
//   storageBucket: "ecommerce1-15a91.appspot.com",
//   messagingSenderId: "92942234005",
//   appId: "1:92942234005:web:7cbf89b616af313b94069c",
//   measurementId: "G-D0ME4Y4QYF"
// };

// firebase.initializeApp(firebaseConfig);

// const auth = firebase.default.auth();
// const database = firebase.default.database();
// export { auth, database };

// firebase.initializeApp(firebaseConfig);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
