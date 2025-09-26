const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-btn");
const allTodo = document.querySelector(".all-todo");

let selectedElement = null;
todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (todoInput.value.trim() === "") {
    alert("Please enter something");
    return;
  }

  if (todoBtn.innerText === "Submit") {
    addTodo(todoInput.value);
  } else {
    selectedElement.firstChild.innerText = todoInput.value;
    todoBtn.innerText = "Submit";
  }

  todoInput.value = "";
});

allTodo.addEventListener("click", function (e) {
  console.log(e);
  if (e.target.tagName === "BUTTON") {
    if (e.target.textContent === "✏️") {
      selectedElement = e.target.parentNode;
      todoInput.value = e.target.parentNode.firstChild.innerText;
      todoInput.focus();
      todoBtn.innerText = "Update";
    } else {
      e.target.parentNode.remove();
    }
  }
});

function addTodo(value) {
  const li = document.createElement("li");
  li.innerHTML = `<span>${value}</span>`;

  const edit = document.createElement("button");
  edit.innerText = "✏️";
  li.appendChild(edit);

  const remove = document.createElement("button");
  remove.innerText = "❌";
  li.appendChild(remove);

  allTodo.appendChild(li);
}
