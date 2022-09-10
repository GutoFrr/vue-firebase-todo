<script setup>
import AddTodo from './components/AddTodo.vue'
import TodoList from './components/TodoList.vue'
</script>

<template>
  <div class="header">
    <img src="./assets/vue.svg" class="logo vue-logo" />
    <img src="./assets/firebase.svg" class="logo firebase-logo" />
  </div>
  <AddTodo />
  <TodoList />
</template>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
}

.logo {
  width: 75px;
  height: 75px;
}
</style>
