const inputBox = document.querySelector(".input-box");
const submitBtn = document.querySelector(".submit-btn");
const todoContainer = document.querySelector(".todo-container");
const todoForm = document.querySelector(".todo-form");
let selectedItem = null;

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (inputBox.value.trim() === "") {
    alert("Please enter something");
    return;
  }

  if (submitBtn.innerText === "Add Todo") {
    addTodo(inputBox.value);
  } else {
    selectedItem.firstChild.innerText = inputBox.value;
    submitBtn.innerText = "Add Todo";
  }

  inputBox.value = "";
});

todoContainer.addEventListener("click", function (e) {
  if (e.target.nodeName === "BUTTON") {
    if (e.target.innerText === "❌") {
      // remove item
      e.target.parentNode.remove();
    } else {
      // edit item
      selectedItem = e.target.parentNode;
      inputBox.focus();
      inputBox.value = e.target.parentNode.firstChild.innerText;
      submitBtn.innerText = "Edit Todo";
    }
  }
});

function addTodo(value) {
  const todoItem = document.createElement("li");
  todoItem.innerHTML = `<span>${value}</span>`;

  const editBtn = document.createElement("button");
  editBtn.innerText = "✏️";

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "❌";

  todoItem.appendChild(editBtn);
  todoItem.appendChild(deleteBtn);

  todoContainer.appendChild(todoItem);
}
