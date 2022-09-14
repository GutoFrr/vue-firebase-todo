<script setup>
import AddTodo from '../components/AddTodo.vue'
import TodoList from '../components/TodoList.vue'
</script>

<template>
  <header class="flex justify-center items-center p-7">
    <img src="../assets/vue.svg" class="w-16 h-16" />
    <img src="../assets/firebase.svg" class="w-16 h-16" />
    <img src="../assets/tailwind.svg" class="w-16 h-16" />
  </header>

  <AddTodo />
  <TodoList />
</template>
