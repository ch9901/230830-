//프로그램 작동되는 프로세스
// 1. 사용자가 input태그에 오늘 할 일을 입력한다.
// 2. 사용자가 입력한 값이 "제출" 버튼을 클릭 했을 때, 특정 저장 공간에 저장된다.
// 3. 그 저장된 공간에 담겨있는 사용자의 입력값이 "todo-list"에 출력되어야한다.

const todoInput = document.querySelector("#todo-input");
const addBtn = document.querySelector("#add-btn");
const todoList = document.querySelector("#todo-list");

function saveToLocal(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function addTodo(e) {
  e.preventDefault();
  const newDiv = document.createElement("div");
  newDiv.classList.add("todo");

  const newTodo = document.createElement("li");
  newTodo.classList.add("todo-contents");

  newTodo.innerText = todoInput.value;

  todoList.appendChild(newDiv);
  newDiv.appendChild(newTodo);

  const completebtn = document.createElement("button");
  completebtn.innerText = "완료👻";
  completebtn.classList.add("complete-btn");
  newDiv.appendChild(completebtn);

  const deletebtn = document.createElement("button");
  deletebtn.innerText = "삭제🫥";
  deletebtn.classList.add("delete-btn");
  newDiv.appendChild(deletebtn);

  saveToLocal(todoInput.value);
  todoInput.value = "";
}

//문서객체안에있는 컨텐츠가 로드가 다 됐다면! 실행해라
//새로고침해도 있도록하게

const getLocal = () => {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach((todo) => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("todo");
    const newTodo = document.createElement("li");
    newTodo.innerText = todo;
    newTodo.classList.add("todo-contents");

    newDiv.appendChild(newTodo);

    const completebtn = document.createElement("button");
    completebtn.innerText = "완료👻";
    completebtn.classList.add("complete-btn");

    newDiv.appendChild(completebtn);

    const deletebtn = document.createElement("button");
    deletebtn.innerText = "삭제🫥";
    deletebtn.classList.add("delete-btn");

    newDiv.appendChild(deletebtn);
    todoList.appendChild(newDiv);
  });
};

const removeLocal = (todo) => {
  let todos;
  if (localStorage.getItem("todos") == null) {
    todos = [];
  } else {
    todos.JSON.parse(localStorage.getItem("todos"));
  }

  const index = todos.indexOf(todo.children[0].innerText);
  todos.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
};

//ul클릭했을 때 완료인지 삭제인지 알려고 만드는 함수
const manageTodo = (e) => {
  const whichBtn = e.target.classList[0];

  if (whichBtn == "complete-btn") {
    const todo = e.target.parentElement;
    todo.children[0].classList.toggle("completed");
    console.log(todo);
  } else if (whichBtn == "delete-btn") {
    const todo = e.target.parentElement;
    removeLocal(todo);
    todo.remove();
  }
};

//문서객체안에있는 컨텐츠가 로드가 다 됐다면! 실행해라
document.addEventListener("DOMContentLoaded", getLocal);
addBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", manageTodo);
