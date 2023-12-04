import "./App.css";
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import Todolist from "./components/Todolist";
import React, { useState, useRef } from "react";

//투두리스트 목업데이터
const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "개인사이트 만들기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "자기소개서 수정하기",
    createdDate: new Date().getTime(),
  },
];

function App() {
  const [todo, setTodo] = useState(mockTodo);
  console.log(todo);
  const idRef = useRef(3);
  //버튼을 눌렀을 때 어떠한 데이터가 생성이 된다
  const onCreate = (content) => {
    const newItem = {
      id: idRef.current,
      isDone: false,
      content,
      createdDate: new Date().getTime(),
    };

    setTodo([newItem, ...todo]);
    idRef.current += 1;
  };

  //check했을 때 checked -> true로 바꿔주는거
  const onUpdate = (targetId) => {
    setTodo(
      todo.map((item) => {
        if (item.id === targetId) {
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      })
      //해당 if문 3항조건연산자로 바꾸기
      // todo.map((it) => {
      //   it.id === targetId ? { ...it, isDone: !it.isDone } : it;
      // })
    );
  };

  const onDelete = (targetId) => {
    setTodo(todo.filter((it) => it.id !== targetId));
  };

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <Todolist todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
