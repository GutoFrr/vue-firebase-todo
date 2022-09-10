<script setup></script>

<template>
  <div class="add-todo">
    <input type="text" placeholder="Add todo" class="add-input" />
    <button type="button" class="add-btn">Add</button>
  </div>
</template>

<style scoped>
.add-todo {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.add-input {
  width: 300px;
  padding: 10px;
  border-radius: 5px;
  border: 2px solid var(--primary);
  outline: none;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.25);
  transition: all 0.3s;
  color: #000;
  font-family: 'Roboto';
}

.add-input:focus {
  box-shadow: 0 4px 10px 2px rgba(0, 0, 0, 0.25);
}

.add-btn {
  width: 75px;
  padding: 10px;
  border-radius: 5px;
  border-color: transparent;
  background-color: var(--primary);
  color: #fff;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: all 0.3s;
  font-family: 'Roboto';
}

.add-btn:hover {
  filter: brightness(90%);
  box-shadow: 0 4px 10px 2px rgba(0, 0, 0, 0.25);
}
</style>
