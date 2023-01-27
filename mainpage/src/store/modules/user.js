import axios from "axios";

export default {
    state: {
        addUser: false,
        loginUser: "",
        loginBoolValue: false,
        orderHistory: [],
    },
    getters: {
        getAddUser: (state) => {
            return state.addUser;
        },
        getLoginUser: (state) => {
            return state.loginUser;
        },
        getLoginBoolValue: (state) => {
            return state.loginBoolValue;
        },
        getOrderHistory: (state) => {
            return state.orderHistory;
        }
    },
    mutations: {
        setAddUser: (state, value) => {
            state.addUser = value
        },
        setLoginUser: (state, value) => {
            state.loginUser = value;
        },
        setLoginBoolValue: (state, value) => {
            state.loginBoolValue = value;
        },
        setOrderHistory: (state, value) => {
            state.orderHistory = value;
        },
        resetLoginBoolValue: (state) => {
            state.loginBoolValue = false;
        }
    },
    actions: {
        async ADD_USER({commit}, {payload}) {
            const response = await axios.post("/api/User/addUsers", payload);
            console.log("Add User: ",response)
            commit('setAddUser', response);
        },
        async LOGIN_USER({commit}, {payload}) {
            const response = await axios.post("/api/User/login", payload);

            console.log(response.data);
            console.log(response.status);
            commit('setLoginUser', response.data)
            if(response.status === 200) {
                commit('setLoginBoolValue', true);
                // this.$router.push("/")
            }
        },
        async ORDER_HISTORY({commit}, {userId}) {
            const user = encodeURIComponent(userId);
            const response = await axios.get("/api/User/showOrderHistory/"+user)
            console.log(response.data)
            commit('setOrderHistory', response.data);
        },
        RESET_LOGIN({commit}) {
            commit("resetLoginBoolValue")
        }
    }
}