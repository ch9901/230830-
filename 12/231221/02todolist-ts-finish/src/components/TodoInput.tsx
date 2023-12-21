import React from "react";
import styled from "styled-components";
import Button from "./Button";
import TextInput from "./TextInput";
import Title from "./Title";

interface props {
  toDo: string;
  setTodo: (todo: string) => void;
  onAdd: (todo: string) => void;
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.75);
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 8px;
  z-index: 1;
  width: 500px;
  height: 300px;
  padding: 30px;
  margin: 250px auto;
`;
const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const TodoInput = ({ toDo, setTodo, onAdd }: props) => {
  const onAddTodo = () => {
    if (toDo === "") return;
    setTodo("");
    onAdd(toDo);
  };
  return (
    <Container>
      <Background>
        <Contents>
          <Title label="할일 추가" />
          <InputContainer>
            <TextInput value={toDo} onChange={setTodo} />
            <Button label="추가" color="dodgerblue" onClick={onAddTodo} />
          </InputContainer>
        </Contents>
      </Background>
    </Container>
  );
};

export default TodoInput;
