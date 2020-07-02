import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      {id:1, text: 'first initial todo', checked: false},
      {id:2, text: 'second initial todo', checked: false},
      {id:3, text: 'third initial todo', checked: false}
    ]
  },
  mutations: {

  },
  actions: {

  },
  getters: {

  }
})