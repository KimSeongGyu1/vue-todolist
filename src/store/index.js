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
    TOGGLE_CHECKBOX(state, {id, checked}) {
      state.todos.some(todo => {
        if (todo.id === id) {
          todo.checked = checked;
          return true;
        }
        return false;
      });
    },
    DELETE_TODO(state, id) {
      state.todos = state.todos.filter(todo => {
        return todo.id !==id;
      })
    },
    ADD_TODO(state, todo) {
      state.todos.push(todo);
    }
  },
  actions: {

  },
  getters: {

  }
})