import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogged: false,
    username: ""
  },
  mutations: {
    SET_LOGGED_IN(state){
      state.isLogged = true;
    },
    SET_USERNAME(state, value) {
      state.username = value
    },
    SET_LOGGED_OUT(state) {
      state.isLogged = false;
    }
  },
  actions: {
    doLogin({commit, dispatch}, {username, password}) {
      let result = true;

      if(result == true) {
        commit("SET_LOGGED_IN")
        commit("SET_USERNAME", username)
        console.log(password);
      } else {
        dispatch("doLogout", {})
      }
    },
    doLogout({commit}) {
      //api.logoff();
      commit("SET_LOGGED_OUT");
      commit("SET_USERNAME", "");
    }
  },
  modules: {}
});
