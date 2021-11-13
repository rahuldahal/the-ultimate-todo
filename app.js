(function () {
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
})();