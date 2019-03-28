const todoForm = document.querySelector(".js-todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".js-todo-list");
let list = [];
const storage = "todoList";

function paintList(todoData) {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    const span = document.createElement("span");

    span.innerText = todoData.text;
    btn.innerText = "삭제";
    li.classList = todoData.id;
    btn.addEventListener("click", deleteList);
    li.appendChild(span);
    li.appendChild(btn);
    todoList.appendChild(li);
}

function saveStorage() {
    const todoItem = JSON.stringify(list);

    localStorage.setItem(storage, todoItem);
}

const todoData = JSON.parse(localStorage.getItem(storage));
function handleForm(event) {
    event.preventDefault();
    if(todoInput.value === "") return;
    const value = {
        id: list.length + 1,
        text: todoInput.value
    };

    list.push(value);
    paintList(value);
    todoInput.value = "";

    saveStorage();
}

function loadTodo() {
    if(localStorage.getItem(storage) !== null) {

        todoData.forEach(function (todoData){
            paintList(todoData);
        });
        list = todoData;
    }
}

function deleteList(elm) {
    elm.target.parentNode;
}

function init() {
    loadTodo();

    todoForm.addEventListener("submit", handleForm);
}

init();