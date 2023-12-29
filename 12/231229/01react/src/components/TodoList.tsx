import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { toDoState, todoSelector, categoryState, Categories } from "./Atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

const TodoList = () => {
  // const toDos = useRecoilValue(toDoState);
  // const selectorOutput = useRecoilValue(todoSelector);
  const toDos = useRecoilValue(todoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  // console.log("selectorOutput :", selectorOutput);
  // console.log("toDos:", toDos);

  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    // console.log(event.currentTarget.value);
    setCategory(event.currentTarget.value as any);
  };
  // console.log(category);
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>ToDo</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
      {/* <h2>To Do</h2>
      <ul>
        {toDo.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <h2>Doing</h2>
      <ul>
        {doing.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <h2>Done</h2>
      <ul>
        {done.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul> */}
    </div>
  );
};

export default TodoList;
