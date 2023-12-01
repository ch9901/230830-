import { useState } from "react";
import "./Todolist.css";
import Todoitem from "./Todoitem";

const Todolist = ({ todo }) => {
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((it) => it.content.toLowerCase().includes(search));
  };
  return (
    <div className="Todolist">
      <h4>Todo-list</h4>
      <input
        value={search}
        onChange={onChangeSearch}
        className="searchbar"
        placeholder="검색어를 입력하세요"
      />
      <div className="list-wrapper">
        {getSearchResult().map((it) => (
          <Todoitem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};

export default Todolist;
