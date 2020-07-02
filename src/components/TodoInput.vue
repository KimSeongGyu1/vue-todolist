<template>
	<div>
		<input
			class="new-todo"
			placeholder="할 일을 추가해주세요"
			v-model="inputText"
			v-on:keyup.enter="addTodo"
		>
	</div>

</template>

<script>
  export default {
    data() {
      return {
        inputText: ''
      }
    },
		methods: {
      addTodo(e) {
        console.log(e);
        const newTodo = {
          id: Math.random(),
					text: e.target.value,
					checked: false
        };
        this.$store.commit('ADD_TODO', newTodo);
        this.inputText = '';
      }
		}
  }
</script>

<style scoped>

</style>