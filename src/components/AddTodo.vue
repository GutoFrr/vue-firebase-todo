<script setup>
import { ref } from 'vue'
import { addDoc } from '@firebase/firestore'
import { db } from '../firebase'
import { collection } from '@firebase/firestore'

const todosCollection = collection(db, 'todos')

const newTodoContent = ref('')
const addTodo = () => {
  addDoc(todosCollection, {
    content: newTodoContent.value,
    done: false,
    date: Date.now(),
  })
  newTodoContent.value = ''
}
</script>

<template>
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
</template>

<style scoped>
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
  border: 2px solid var(--secundary);
  outline: none;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.25);
  transition: all 0.3s;
  color: #000;
  font-family: 'Roboto';
}

.add-input::placeholder {
  color: var(--primary);
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
</style>
