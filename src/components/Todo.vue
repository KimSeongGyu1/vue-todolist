<template>
	<li v-bind:class="{completed : todo.checked}">
		<div class="view">
			<input
				class="toggle"
				type="checkbox"
				v-bind:checked="todo.checked"
				v-on:change="toggleCheckBox"
			>
			<label class="label">{{todo.text}}</label>
			<button
				class="destroy"
				v-on:click="deleteTodo"
			/>
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
		},
		methods: {
			toggleCheckBox(e) {
				const id = this.todo.id;
				const checked = e.target.checked;
				this.$store.commit('TOGGLE_CHECKBOX', {id, checked});
			},
			deleteTodo() {
				this.$store.commit('DELETE_TODO', this.todo.id);
			}
		}
	}
</script>

<style scoped>

</style>