import React, { useRef } from "react";
import DraggableCard from "./DraggableCard";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { IToDo, toDoState } from "../Atoms";
import { useSetRecoilState } from "recoil";

const Wrapper = styled.div`
  background: ${(props) => props.theme.boardColor};
  padding: 10px;
  padding-top: 30px;
  min-height: 600px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h2`
  font-size: 20px;
  text-transform: capitalize;
  text-align: center;
  font-weight: 600;
  margin-bottom: 10px;
`;
const Area = styled.div<IAreaProps>`
  background: ${(props) =>
    props.isDraggingOver
      ? "tomato"
      : props.isDraggingFromThis
      ? "Dodgerblue"
      : "#666"};
  border-radius: 5px;
  flex-grow: 1;
  transition: background 0.3s ease-in-out;
  padding: 10px;
`;
const Form = styled.form`
  width: 100%;
  input {
    box-sizing: border-box;
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: none;
    border-radius: 3px;
    &:focus {
      outline: none;
    }
  }
`;
interface IAreaProps {
  isDraggingOver: boolean;
  isDraggingFromThis: boolean;
}
interface IBoardProps {
  toDos: IToDo[];
  boardId: string;
}
interface IForm {
  toDo: string;
}
const Board = ({ toDos, boardId }: IBoardProps) => {
  const setToDos = useSetRecoilState(toDoState);
  //register setValue handlesubmit
  const { register, setValue, handleSubmit } = useForm<IForm>();
  const inputRef = useRef<HTMLInputElement>(null);
  const onClick = () => {
    inputRef.current?.focus();
    setTimeout(() => {
      inputRef.current?.blur();
    }, 5000);
  };
  const onValid = ({ toDo }: IForm) => {
    const newTodo = {
      id: Date.now(),
      text: toDo,
    };
    setToDos((allBoards) => {
      return { [boardId]: [newTodo, ...allBoards[boardId]]};
    });
    setValue("toDo", "");
  };
  return (
    <Wrapper>
      <Title>{boardId}</Title>
      <Form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("toDo", { required: true })}
          type="text"
          placeholder={`Add Task on ${boardId}`}
        />
      </Form>
      <Droppable droppableId={boardId}>
        {(magic, snapshot) => (
          <Area
            isDraggingOver={snapshot.isDraggingOver}
            isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)}
            ref={magic.innerRef}
            {...magic.droppableProps}
          >
            {toDos.map((toDo, index) => (
              <DraggableCard
                key={toDo.id}
                toDoId={toDo.id}
                toDoText={toDo.text}
                index={index}
              />
            ))}
            {/* 아무리 움직여도 크기 보장해주는 문법 */}
            {magic.placeholder}
          </Area>
        )}
      </Droppable>
    </Wrapper>
  );
};

export default Board;
