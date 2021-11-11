(function () {
  // Theme toggle
  const todoElement = document.querySelector(".todo");
  const themeToggler = document.querySelector(".todo__themeToggler");

  themeToggler.addEventListener("click", () =>
    todoElement.classList.toggle("dark")
  );
})();
