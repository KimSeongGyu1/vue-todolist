<template>
  <div class="todoapp">

    <h1>TODOS</h1>

    <input
      class="new-todo"
      placeholder="할 일을 추가해주세요"
    >

    <div class="todo-list">
      <li>
        <div class="view">
          <input
            class="toggle"
            type="checkbox"
          >
          <label class="label">new todo 1</label>
          <button class="destroy"></button>
        </div>
      </li>
    </div>

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


export default {
  name: 'App',
  components: {

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
