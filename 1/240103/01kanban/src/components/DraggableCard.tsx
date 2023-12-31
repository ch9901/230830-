import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { toDoState } from "../Atoms";

const Card = styled.div<{ isDragging: boolean }>`
  background: ${(props) => (props.isDragging ? "pink" : props.theme.cardColor)};
  box-shadow:${(props) =>
    props.isDragging ? "0px 2px 5px rgba(0,0,0,0.1)" : "none"};
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 5px;
`;
interface IDraggableCardProps {
  toDo: string;
  index: number;
}

const DraggableCard = ({ toDo, index }: IDraggableCardProps) => {
  console.log(toDo, "has been redered");
  return (
    <Draggable key={toDo} draggableId={toDo} index={index}>
      {(magic, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          {toDo}
        </Card>
      )}
    </Draggable>
  );
};

export default React.memo(DraggableCard);
