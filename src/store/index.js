import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      {id:1, text: 'first initial todo', checked: false},
      {id:2, text: 'second initial todo', checked: false},
      {id:3, text: 'third initial todo', checked: false}
    ],
    show: 'all'
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
    },
    SHOW_ALL(state) {
      state.show = 'all';
    },
    SHOW_TODOS(state) {
      state.show = 'todos';
    },
    SHOW_COMPLETED(state) {
      state.show = 'completed';
    }
  },
  actions: {

  },
  getters: {
    filteredTodos: state => {
      if (state.show === 'all') {
        return state.todos;
      } else if (state.show === 'todos') {
        return state.todos.filter(todo => todo.checked === false);
      } else if (state.show === 'completed') {
        return state.todos.filter(todo => todo.checked === true);
      }
       else {
        return [];
      }
    }
  }
})