(function () {
  // Theme toggle
  const todoElement = document.querySelector(".todo");
  const themeToggler = document.querySelector(".todo__themeToggler");

  themeToggler.addEventListener("click", () =>
    todoElement.classList.toggle("dark")
  );

  // Add todo item
  const todoList = document.querySelector('.todo__list');
  const todoForm = document.querySelector('.todo__form');
  const todos = [];
  const localStorageKey = 'TODOS';

  todoForm.addEventListener('submit', e=>{
    e.preventDefault();
    const {value} = todoForm[0];
    todoForm.reset();

    const listItem = document.createElement('li');
    listItem.classList.add('todo__listItem');

    const listButton = document.createElement('button');
    listButton.classList.add('todo__listButton');

    const listIconContainer = document.createElement('span');
    listIconContainer.classList.add('checkIconContainer');
  
    const listValue = document.createElement('span');
    listValue.textContent = value;
    
    listButton.appendChild(listIconContainer);
    listButton.appendChild(listValue);
    listItem.appendChild(listButton);
    todoList.appendChild(listItem);

    // Save to LocalStorage
    todos.push(value);
    localStorage.setItem(localStorageKey, JSON.stringify(todos)); 
  })
})();
