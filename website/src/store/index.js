import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    yourCart: []
  },
  mutations: {
    ADD_ITEM (state, data){
      state.yourCart.push(data)
    }
  },
  actions: {},
  modules: {},
});
