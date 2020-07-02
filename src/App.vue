<template>
  <div class="todoapp">

    <h1>TODOS</h1>

    <TodoInput/>

    <TodoList/>

    <div class="count-container">
      <span class="todo-count">
        1 개
      </span>

      <ul class="filters">
        <li>
          <a>전체보기</a>
        </li>
        <li>
          <a>해야할 일</a>
        </li>
        <li>
          <a>완료한 일</a>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
  import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

export default {
  name: 'App',
  components: {
    TodoInput,
    TodoList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
