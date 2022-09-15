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
  <!-- Todo List -->
  <div class="flex flex-col items-center mx-auto" v-for="todo in todos">
    <!-- Todo Item -->
    <div
      class="w-96 flex justify-between items-center mb-2.5 p-3.5 bg-white rounded transition duration-300 shadow-lg hover:shadow-xl"
    >
      <h4
        :class="{ 'text-vue-green line-through': todo.done }"
        class="w-64 font-normal overflow-hidden"
      >
        {{ todo.content }}
      </h4>
      <div class="flex items-center gap-2.5">
        <button
          type="button"
          class="todo-btn bg-vue-green"
          @click="toggleDone(todo.id)"
        >
          &check;
        </button>
        <button
          type="button"
          class="todo-btn bg-red-600"
          @click="deleteTodo(todo.id)"
        >
          &cross;
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
