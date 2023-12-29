import React from "react";
import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { toDoState, categoryState } from "./Atoms";

interface IForm {
  toDo: string;
}

const CreateToDo = () => {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const category = useRecoilValue(categoryState);
  const setToDos = useSetRecoilState(toDoState);
  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { id: Date.now(), text: toDo, category: category },
      ...oldToDos,
    ]);
    // 버튼누르면 안에 값 reset
    setValue("toDo", "");
  };
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("toDo", {
          required: "Please write a To Do",
        })}
        type="text"
        placeholder="Write a To Do"
      />
      <button>ADD</button>
    </form>
  );
};

export default CreateToDo;
