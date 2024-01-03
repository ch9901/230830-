import React from "react";
import DraggableCard from "./DraggableCard";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

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
interface IAreaProps {
  isDraggingOver: boolean;
  isDraggingFromThis: boolean;
}
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
  padding:10px;
`;
interface IBoardProps {
  toDos: string[];
  boardId: string;
}
const Board = ({ toDos, boardId }: IBoardProps) => {
  return (
    <Wrapper>
      <Title>{boardId}</Title>
      <Droppable droppableId={boardId}>
        {(magic, snapshot) => (
          <Area
            isDraggingOver={snapshot.isDraggingOver}
            isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)}
            ref={magic.innerRef}
            {...magic.droppableProps}
          >
            {toDos.map((toDo, index) => (
              <DraggableCard key={toDo} toDo={toDo} index={index} />
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
