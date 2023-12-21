import React from "react";
import styled from "styled-components";
import Todoitem from "./Todoitem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

interface props {
  //안에 들어 올 요소가 몇개인지 모르니까 제네릭으로 선언
  toDoList: Array<string>;
  onDelete?: (todo: string) => void;
}

const TodoList = ({ toDoList, onDelete }: props) => {
  return (
    <Container>
      {toDoList.map((todo, index) => (
        <Todoitem
          key={index}
          label={todo}
          onDelete={() => {
            if (typeof onDelete === "function") onDelete(todo);
          }}
        />
      ))}
    </Container>
  );
};

export default TodoList;
