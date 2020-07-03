<template>
	<div>
		<ul class="filters">
			<li>
				<a
					v-bind:class= "showCondition === 'all' ? 'selected' : ''"
					v-on:click="showAll"
				>전체보기</a>
			</li>
			<li>
				<a
					v-bind:class= "showCondition === 'todos' ? 'selected' : ''"
					v-on:click="showTodos"
				>해야할 일</a>
			</li>
			<li>
				<a
					v-bind:class= "showCondition === 'completed' ? 'selected' : ''"
					v-on:click="showCompleted"
				>완료한 일</a>
			</li>
		</ul>
	</div>
</template>

<script>
  export default {
		methods: {
			showAll() {
				this.$store.commit('SHOW_ALL');
			},
			showTodos() {
        this.$store.commit('SHOW_TODOS');
			},
			showCompleted() {
        this.$store.commit('SHOW_COMPLETED');
			}
		},
		computed: {
			showCondition() {
				return this.$store.state.show;
			}
		}
  }
</script>

<style scoped>

</style>