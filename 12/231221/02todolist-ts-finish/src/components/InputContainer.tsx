import React, { useState } from "react";
import ShowInputButton from "./ShowInputButton";
import TodoInput from "./TodoInput";

interface props {
  toDo: string;
  setTodo: (todo: string) => void;
  onAdd: (todo: string) => void;
}

const InputContainer = ({ toDo, setTodo, onAdd }: props) => {
  const [showTodoInput, setShowTodoInput] = useState(true);

  return (
    <div>
      {showTodoInput && (
        <TodoInput toDo={toDo} setTodo={setTodo} onAdd={onAdd} />
      )}
      <ShowInputButton
        show={showTodoInput}
        onClick={() => setShowTodoInput(!showTodoInput)}
      />
    </div>
  );
};

export default InputContainer;
