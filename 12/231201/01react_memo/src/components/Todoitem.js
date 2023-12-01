import React from "react";
import "./Todoitem.css";
const Todoitem = ({ id, isDone, content, createdDate }) => {
  console.log(id, isDone, content, createdDate);
  return (
    <div className="Todoitem">
      <div className="checkbox-col">
        <input checked={isDone} type="checkbox" />
      </div>
      <div className="title-col">{content}</div>
      <div className="date-col">{new Date(createdDate).toLocaleDateString()}</div>
      <div className="btn-col">
        <button>완료 !</button>
      </div>
    </div>
  );
};

export default Todoitem;
