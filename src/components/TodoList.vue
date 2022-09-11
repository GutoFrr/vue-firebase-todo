<script setup>
import { ref, onMounted } from 'vue'
import {
  collection,
  onSnapshot,
  doc,
  deleteDoc,
  updateDoc,
  query,
  orderBy,
} from '@firebase/firestore'
import { db } from '../firebase'

const todos = ref([])

const todosCollection = collection(db, 'todos')
const todosQuery = query(todosCollection, orderBy('date', 'desc'))

// get todos
onMounted(() => {
  onSnapshot(todosQuery, (querySnapshot) => {
    const fbTodos = []
    querySnapshot.forEach((doc) => {
      const todo = {
        id: doc.id,
        content: doc.data().content,
        done: doc.data().done,
      }
      fbTodos.push(todo)
    })
    todos.value = fbTodos
  })
})

// delete todo
const deleteTodo = (id) => {
  deleteDoc(doc(todosCollection, id))
}

// toggle todo
const toggleDone = (id) => {
  const index = todos.value.findIndex((todo) => {
    return todo.id === id
  })

  updateDoc(doc(todosCollection, id), {
    done: !todos.value[index].done,
  })
}
</script>

<template>
  <div class="card" v-for="todo in todos">
    <div class="todo-item">
      <h4 :class="{ strike: todo.done }" class="todo-name">
        {{ todo.content }}
      </h4>
      <div class="todo-btns">
        <button
          type="button"
          class="todo-btn check-btn"
          @click="toggleDone(todo.id)"
        >
          &check;
        </button>
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
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-block: 10px;
  max-width: 395px;
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

.todo-name {
  font-weight: 400;
  width: 255px;
  overflow: hidden;
}

.todo-item .strike {
  text-decoration: line-through;
  color: var(--primary);
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
