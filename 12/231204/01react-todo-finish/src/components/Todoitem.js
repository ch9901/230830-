import React, { useContext } from "react";
import { TodoDispatchContext } from "../App";
import "./Todoitem.css";
const Todoitem = ({ id, isDone, content, createdDate }) => {
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);
  // console.log(id, isDone, content, createdDate);
  console.log(`${id} TodoItem update`);

  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDelete = () => {
    onDelete(id);
  };

  return (
    <div className="Todoitem">
      <div className="checkbox-col">
        <input onChange={onChangeCheckbox} checked={isDone} type="checkbox" />
      </div>
      <div className="title-col">{content}</div>
      <div className="date-col">
        {new Date(createdDate).toLocaleDateString()}
      </div>
      <div className="btn-col">
        <button onClick={onClickDelete}> 삭제 </button>
      </div>
    </div>
  );
};

export default React.memo(Todoitem);
