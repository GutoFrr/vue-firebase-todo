<script setup>
import { ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'

// todos
const todos = ref([
  {
    id: 1,
    content: 'Do the dishes',
    done: false,
  },
  {
    id: 2,
    content: 'Go to shower',
    done: false,
  },
])

// new todo
const newTodoContent = ref('')

const addTodo = () => {
  const newTodo = {
    id: uuidv4(),
    content: newTodoContent.value,
    done: false,
  }
  todos.value.unshift(newTodo)
  newTodoContent.value = ''
}

// delete todo
const deleteTodo = (id) => {
  todos.value = todos.value.filter((todo) => {
    return todo.id !== id
  })
}
</script>

<template>
  <div class="header">
    <img src="./assets/vue.svg" class="logo vue-logo" />
    <img src="./assets/firebase.svg" class="logo firebase-logo" />
  </div>

  <!-- add todo -->
  <form @submit.prevent="addTodo">
    <div class="add-todo">
      <input
        v-model="newTodoContent"
        type="text"
        placeholder="Add todo"
        class="add-input"
      />
      <button class="add-btn" :disabled="!newTodoContent">Add</button>
    </div>
  </form>

  <!-- todo list -->
  <div class="card" v-for="todo in todos">
    <div class="todo-item">
      <h4>{{ todo.content }}</h4>
      <div class="todo-btns">
        <button type="button" class="todo-btn check-btn">&check;</button>
        <button
          type="button"
          class="todo-btn delete-btn"
          @click="deleteTodo(todo.id)"
        >
          &cross;
        </button>
      </div>
    </div>
  </div>
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

.add-todo {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
}

.add-input {
  width: 300px;
  padding: 10px;
  border-radius: 5px;
  border: 2px solid var(--primary);
  outline: none;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.25);
  transition: all 0.3s;
  color: #000;
  font-family: 'Roboto';
}

.add-input:focus {
  box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.25);
}

.add-btn {
  width: 75px;
  padding: 10px;
  border-radius: 5px;
  border-color: transparent;
  background-color: var(--primary);
  color: #fff;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: all 0.3s;
  font-family: 'Roboto';
}

.add-btn:hover {
  filter: brightness(90%);
  box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.25);
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-block: 10px;
}

.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #fff;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  transition: all 0.3s;
}

.todo-item:hover {
  box-shadow: 0 2px 8px 1px rgba(0, 0, 0, 0.25);
}

.todo-btns {
  display: flex;
  align-items: center;
  gap: 10px;
}

.todo-btn {
  width: 40px;
  height: 35px;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
}

.todo-btn:hover {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  filter: brightness(0.9);
}

.check-btn {
  background-color: var(--primary);
}

.delete-btn {
  background-color: var(--danger);
}
</style>
