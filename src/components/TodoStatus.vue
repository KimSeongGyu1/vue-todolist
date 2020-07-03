<template>
	<div class="count-container">
		<TodoCount/>
		<TodoFilters/>
	</div>
</template>

<script>
	import TodoCount from './TodoCount';
	import TodoFilters from './TodoFilters';

  export default {
		components: {
			TodoCount,
			TodoFilters
		}
  }
</script>

<style scoped>

</style>