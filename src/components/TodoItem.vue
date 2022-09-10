<script setup>
defineProps({
  todo: String,
})
</script>

<template>
  <div class="todo-item">
    <h4>{{ todo }}</h4>
    <div class="todo-btns">
      <button type="button" class="todo-btn check-btn">&check;</button>
      <button type="button" class="todo-btn delete-btn">&cross;</button>
    </div>
  </div>
</template>

<style scoped>
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
