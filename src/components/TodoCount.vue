<template>
	<div>
		<span class="todo-count">
			{{ count }} 개
		</span>
	</div>
</template>

<script>
  export default {
    computed: {
      count() {
        return this.$store.getters.numberOfAll;
      }
    }
  }
</script>

<style scoped>

</style>