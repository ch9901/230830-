import { error } from "console";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";

interface IForm {
  toDo: string;
}

interface IToDo {
  id: number;
  text: string;
  category: "TO_DO" | "DOING" | "DONE";
}

//atom 은 객체형태로 관리함
//key >> 이 값을 관리하는 애야
//default >> 기본 값>배열안에 객체로 관리 될것이기 때문이다.
const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

const TodoList = () => {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const [toDos, setToDos] = useRecoilState(toDoState);

  const onValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { id: Date.now(), text: toDo, category: "TO_DO" },
      ...oldToDos,
    ]);
    // 버튼누르면 안에 값 reset
    setValue("toDo", "");
  };
  console.log(toDos);
  return (
    <div>
      <h1>To Do's</h1>
      <hr />
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("toDo", {
            required: "Please write a To Do",
          })}
          type="text"
          placeholder="Write a To Do"
        />
        <button>ADD</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>{toDo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
