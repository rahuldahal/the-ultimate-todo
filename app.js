(function () {
  // Complete a todo callback
  function completeTodo(listItem) {
    listItem.classList.add("todo__listItem--active");
    removeTodo(listItem.textContent);
    listItem.children[0].setAttribute("disabled", "true");
  }

  // Add todo function
  const todoList = document.querySelector(".todo__list");
  function addTodo(value) {
    if (todoList.childNodes[0].nodeName === "#text") {
      todoList.innerHTML = "";
    }
    const listItem = document.createElement("li");
    listItem.classList.add("todo__listItem");

    const listButton = document.createElement("button");
    listButton.classList.add("todo__listButton");

    const listIconContainer = document.createElement("span");
    listIconContainer.classList.add("checkIconContainer");

    const listValue = document.createElement("span");
    listValue.textContent = value;

    listButton.appendChild(listIconContainer);
    listButton.appendChild(listValue);
    listItem.appendChild(listButton);
    todoList.appendChild(listItem);

    // attach complete todo event listener
    listItem.addEventListener("click", () => completeTodo(listItem));
  }

  // Save to LocalStorage
  const localStorageKey = "TODOS";
  function saveToLocalStorage(value) {
    todos.push(value);
    localStorage.setItem(localStorageKey, JSON.stringify(todos));
  }

  // Read todos
  const todos = JSON.parse(localStorage.getItem(localStorageKey)) || [];
  if (todos.length === 0) {
    todoList.textContent = "There are no todos left.";
  } else {
    todos.forEach((todo) => {
      addTodo(todo);
    });
  }

  // Theme toggle
  const todoElement = document.querySelector(".todo");
  const themeToggler = document.querySelector(".todo__themeToggler");

  themeToggler.addEventListener("click", () =>
    todoElement.classList.toggle("dark")
  );

  // Add todo item
  const todoForm = document.querySelector(".todo__form");

  todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const { value } = todoForm[0];
    todoForm.reset();
    addTodo(value);
    saveToLocalStorage(value);
  });

  // Complete a todo

  const listItems = document.querySelectorAll(".todo__listItem");
  listItems.forEach((listItem) => {
    listItem.addEventListener("click", () => completeTodo(listItem));
  });

  // Remove todo
  function removeTodo(value) {
    const todos = JSON.parse(localStorage.getItem(localStorageKey));
    const completedTodos = JSON.parse(localStorage.getItem("COMPLETED")) || [];
    completedTodos.push(value);
    const filteredTodo = todos.filter((todo) => todo !== value);
    localStorage.setItem(localStorageKey, JSON.stringify(filteredTodo));
    localStorage.setItem("COMPLETED", JSON.stringify(completedTodos));
  }
})();
