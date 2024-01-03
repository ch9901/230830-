import React from "react";
import "./App.css";
import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { toDoState } from "./Atoms";
import Board from "./components/Board";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;
function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  console.log(toDos);
  //객체안에있는 key값을 뽑아서 배열로 만드는 것 object.keys
  // 타입 dropResult >> dnd의 타입 설정 문법임
  const onDragEnd = (info: DropResult) => {
    // console.log(info);
    const { destination, source, draggableId } = info;

    //예외처리조항 >> 움직이지않으면 destination > null,undefined -> false
    if (!destination) return;
    //같은 카테고리로 이동하려고한다면?
    if (destination?.droppableId === source.droppableId) {
      setToDos((oldToDos) => {
        //이동하고자하는 요소의 아이디를 찾아서
        const boardCopy = [...oldToDos[source.droppableId]];
        //이동하고자하는 요소의 아이디를 잘라냄
        boardCopy.splice(source.index, 1);
        //이동하고자하는 곳으로 움직인 아이디를 다시 넣어줌
        boardCopy.splice(destination.index, 0, draggableId);
        return {
          //변함이없는건 그냥 바뀐거만 반영하기 위해
          ...oldToDos,
          [source.droppableId]: boardCopy,
        };
      });
    }
    //다른카테고리로 이동하려고한다면?
    if (destination?.droppableId !== source.droppableId) {
      setToDos((oldToDos) => {
        //값을 이동하려고하는기존 보드
        const sourceBoard = [...oldToDos[source.droppableId]];
        const destinationBoard = [...oldToDos[destination.droppableId]];
        sourceBoard.splice(source.index, 1);
        destinationBoard.splice(destination.index, 0, draggableId);
        return {
          ...oldToDos,
          [source.droppableId]: sourceBoard,
          [destination.droppableId]: destinationBoard,
        };
      });
    }
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(toDos).map((boardId) => (
            <Board key={boardId} toDos={toDos[boardId]} boardId={boardId} />
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
