document.addEventListener("DOMContentLoaded", function () {
  const todoForm = document.querySelector(".todo-form");
  const inputBox = document.querySelector(".input-box");
  const submitBtn = document.querySelector(".submit-btn");
  const todoList = document.querySelector(".todo-list");

  let selectedItem = null;

  inputBox.focus();
  todoForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const inputText = inputBox.value;
    if (inputText.trim() === "") {
      alert("Please enter text");
      return;
    }

    if (submitBtn.innerText === "Add Todo") {
      addTodo(inputText);
    } else {
      selectedItem.firstChild.innerText = inputText;
      selectedItem = null;
      submitBtn.innerText = "Add Todo";
    }
    inputBox.value = "";
  });

  todoList.addEventListener("click", function (event) {
    const target = event.target;
    selectedItem = target.parentNode;

    if (target.nodeName === "BUTTON") {
      if (target.innerHTML === "❌") {
        target.parentNode.remove();
      } else {
        submitBtn.innerText = "Edit Todo";
        inputBox.value = target.parentNode.firstChild.innerText;
        inputBox.focus();
      }
    }
  });

  function addTodo(text) {
    const todoItem = document.createElement("li");
    todoItem.innerHTML = `<span>${text}</span>`;

    const editBtn = document.createElement("button");
    editBtn.innerText = "✏️";
    const removeBtn = document.createElement("button");
    removeBtn.innerText = "❌";

    todoItem.appendChild(editBtn);
    todoItem.appendChild(removeBtn);

    todoList.appendChild(todoItem);
  }
});
