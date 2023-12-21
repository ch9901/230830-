import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import DataView from "./components/DataView";
import TodoInput from "./components/TodoInput";
import ShowInputButton from "./components/ShowInputButton";
import Button from "./components/Button";
import InputContainer from "./components/InputContainer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: #eee;
`;

const mockup = [
  "리액트 공부하기",
  "쇼핑몰 만들기",
  "넷플릭스 만들기",
  "으아아악",
];

function App() {
  const [toDoList, setTodoList] = useState(mockup);
  const [toDo, setTodo] = useState("");
  const onDelete = (todo: string) => {
    setTodoList(toDoList.filter((item) => item !== todo));
  };
  const onAdd = () => {
    if (toDo === "") return;
    setTodoList([...toDoList, toDo]);
    setTodo("");
  };

  return (
    <Container>
      <DataView toDoList={toDoList} onDelete={onDelete} />
      <InputContainer toDo={toDo} setTodo={setTodo} onAdd={onAdd} />
     
    </Container>
  );
}

export default App;
