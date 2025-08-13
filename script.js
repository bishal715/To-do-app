// DOM Elements
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task");
const todosList = document.getElementById("todos-list");
const itemsLeft = document.getElementById("items-left");
const clearCompletedBtn = document.getElementById("clear-completed");
const emptyState = document.querySelector(".empty-state");
const dateElement = document.getElementById("date");
const filters = document.querySelectorAll(".filter");

// State
let todos = [];
let currentFilter = "all";

// Functions
function addTodo(text) {
  if (text.trim() === "") return;

  const todo = {
    id: Date.now(),
    text,
    completed: false,
  };

  todos.push(todo);
  taskInput.value = "";

  saveAndRender();
}

function saveAndRender() {
  saveTodos();
  renderTodos();
}

function saveTodos() {
  try {
    localStorage.setItem("todos", JSON.stringify(todos));
  } catch (error) {
    console.error("Failed to save todos to localStorage:", error);
  }
  updateItemsCount();
}

function loadTodos() {
  try {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      todos = JSON.parse(storedTodos);
    }
  } catch (error) {
    console.error("Failed to load todos from localStorage:", error);
  }
}

function renderTodos() {
  todosList.innerHTML = "";
  const filteredTodos = filterTodos(currentFilter);
  const fragment = document.createDocumentFragment();

  filteredTodos.forEach((todo) => {
    const todoItem = document.createElement("li");
    todoItem.classList.add("todo-item");
    if (todo.completed) {
      todoItem.classList.add("completed");
    }

    const checkboxContainer = document.createElement("label");
    checkboxContainer.classList.add("checkbox-container");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("todo-checkbox");
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", () => toggleTodo(todo.id));

    const checkmark = document.createElement("span");
    checkmark.classList.add("checkmark");

    checkboxContainer.append(checkbox, checkmark);

    const todoText = document.createElement("span");
    todoText.classList.add("todo-item-text");
    todoText.textContent = todo.text;

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>';
    deleteBtn.addEventListener("click", () => deleteTodo(todo.id));

    todoItem.append(checkboxContainer, todoText, deleteBtn);
    fragment.appendChild(todoItem);
});

  todosList.appendChild(fragment);
  checkEmptyState();
}

function filterTodos(filter) {
  switch (filter) {
    case "active":
      return todos.filter((todo) => !todo.completed);
    case "completed":
      return todos.filter((todo) => todo.completed);
    default:
      return todos;
  }
}

function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  saveAndRender();
}

function toggleTodo(id) {
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  saveAndRender();
}

function clearCompleted() {
  todos = todos.filter((todo) => !todo.completed);
  saveAndRender();
}

function updateItemsCount() {
  const uncompletedCount = todos.filter((todo) => !todo.completed).length;
  itemsLeft.textContent = `${uncompletedCount} item${uncompletedCount !== 1 ? "s" : ""} left`;
}

function checkEmptyState() {
  const filteredTodos = filterTodos(currentFilter);
  if (filteredTodos.length === 0) {
    emptyState.classList.remove("hidden");
  } else {
    emptyState.classList.add("hidden");
  }
}

function setDate() {
  const options = { weekday: "long", month: "short", day: "numeric" };
  const today = new Date();
  dateElement.textContent = today.toLocaleDateString("en-US", options);
}

function setActiveFilter(filter) {
  currentFilter = filter;
  filters.forEach((item) => {
    item.classList.toggle("active", item.getAttribute("data-filter") === filter);
  });
  renderTodos();
}

// Event Listeners
addTaskBtn.addEventListener("click", () => {
  addTodo(taskInput.value);
});

taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTodo(taskInput.value);
  }
});

clearCompletedBtn.addEventListener("click", clearCompleted);

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    setActiveFilter(filter.getAttribute("data-filter"));
  });
});

document.addEventListener("DOMContentLoaded", () => {
  setDate();
  loadTodos();
  updateItemsCount();
  renderTodos();
});