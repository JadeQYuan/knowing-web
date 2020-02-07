import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const TokenKey = "KnowingToken";

export default new Vuex.Store({
    state: {
        token: "" || localStorage.getItem(TokenKey),
        user: {}
    },
    mutations: {
        saveToken(state, payload) {
            this.state.token = payload.token;
            localStorage.setItem(TokenKey, payload.token);
        },
        clearToken() {
            this.state.token = "";
            localStorage.removeItem(TokenKey);
        },
        setUserInfo(state, payload) {
            this.state.user = payload.user;
        },
        clearUser() {
            this.state.user = {};
            this.$store.commit("clearToken");
        }
    },
    actions: {},
    modules: {}
});
