import React from "react";
import { IToDo, toDoState, Categories } from "./Atoms";
import { useSetRecoilState } from "recoil";
import TodoList from "./TodoList";

// [
//   {
//       "id": 1703816298465,
//       "text": "5",
//       "category": "TO_DO"
//   },
//   {
//       "id": 1703816297801,
//       "text": "4",
//       "category": "TO_DO"
//   },
//   {
//       "id": 1703816297409,
//       "text": "3",
//       "category": "TO_DO"
//   },
//   {
//       "id": 1703816296439,
//       "text": "2",
//       "category": "TO_DO"
//   },
//   {
//       "id": 1703816296246,
//       "text": "1",
//       "category": "TO_DO"
//   }
// ]

// const food = ["1", "2", "3"];
// const food1 = ["1", "2", "3"];
// const food2 = ["2"]; // slice
// const front = ["1"];
// const back = ["3", "4"];
// const food1_2 = [...front, "gam", ...back];

const ToDo = ({ text, category, id }: IToDo) => {
  const setToDos = useSetRecoilState(toDoState);
  //버튼이 눌려졌다. html button element 가
  const onclick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    console.log("I wanna go", name);

    //몇번째 인덱스인지 알게끔 하려고!!!
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo: any) => toDo.id === id);
      // console.log(targetIndex); //<< 선택 된 인덱스
      const oldToDo = oldToDos[targetIndex];
      //바뀐 category 위에서 찾아온 새 category name 으로 바꿔줌.
      const newToDo = { id, text, category: name as any };
      console.log("replaced To Do in index : ", targetIndex, "with ", newToDo);
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== Categories.DOING && (
        <button name={Categories.DOING + ""} onClick={onclick}>
          Doing
        </button>
      )}
      {category !== Categories.TO_DO && (
        <button name={Categories.TO_DO + ""} onClick={onclick}>
          ToDo
        </button>
      )}
      {category !== Categories.DONE && (
        <button name={Categories.DONE + ""} onClick={onclick}>
          Done
        </button>
      )}
    </li>
  );
};

export default ToDo;
