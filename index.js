const todoForm = document.querySelector(".todo-form");
const inputBox = document.querySelector(".input-box");
const submitBtn = document.querySelector(".submit-btn");
const todoList = document.querySelector(".todo-list");

inputBox.focus();
let selectedNode = null;

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  if (inputBox.value.trim() === "") {
    alert("Please enter something");
    return;
  }

  if (submitBtn.innerText === "Add Todo") {
    addTodo(inputBox.value);
  } else {
    selectedNode.innerText = inputBox.value;
    selectedNode = null;
    submitBtn.innerText = "Add Todo";
  }

  inputBox.value = "";
});

todoList.addEventListener("click", function (event) {
  if (event.target.nodeName === "BUTTON") {
    if (event.target.innerText === "❌") {
      event.target.parentNode.remove();
    } else {
      selectedNode = event.target.parentNode.firstChild;
      inputBox.value = event.target.parentNode.firstChild.innerText;
      submitBtn.innerText = "Edit Todo";
      inputBox.focus();
    }
  }
});

function addTodo(value) {
  const todoItem = document.createElement("li");
  todoItem.innerHTML = `<span>${value}</span>`;

  const removeBtn = document.createElement("button");
  removeBtn.innerText = "❌";

  const editBtn = document.createElement("button");
  editBtn.innerText = "✏️";

  todoItem.appendChild(removeBtn);
  todoItem.appendChild(editBtn);

  todoList.appendChild(todoItem);
}
