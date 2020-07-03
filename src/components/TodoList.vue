<template>
	<div class="todo-list">
		<Todo
			v-for="todo in todos"
			v-bind:key="todo.id"
			v-bind:todo="todo"
		/>
	</div>
</template>

<script>
	import Todo from '@/components/Todo.vue';

  export default {
    components: {
      Todo
    },
		computed: {
			todos() {
				return this.$store.getters.filteredTodos;
			}
		}
  }
</script>

<style scoped>

</style>