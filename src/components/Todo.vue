<template>
	<li>
		<div class="view">
			<input
				class="toggle"
				type="checkbox"
			>
			<label class="label">{{todo.text}}</label>
			<button class="destroy"></button>
		</div>
	</li>
</template>

<script>
  export default {
		props: {
			todo: {
				type: Object,
				required: true
			}
		}
  }
</script>

<style scoped>

</style>