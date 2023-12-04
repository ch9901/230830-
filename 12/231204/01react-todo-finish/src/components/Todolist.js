import { useContext, useState, useMemo } from "react";
import { TodoStateContext } from "../App";
import "./Todolist.css";
import Todoitem from "./Todoitem";

const Todolist = () => {
  const storeData = useContext(TodoStateContext);
  const todo = useContext(TodoStateContext);
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((it) => it.content.toLowerCase().includes(search));
  };

  const analyzeTodo = useMemo(() => {
    console.log("analyzeTodo 함수 호출");
    const totalCount = todo.length;
    const doneCount = todo.filter((it) => it.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todo]);

  const { totalCount, doneCount, notDoneCount } = analyzeTodo;

  return (
    <div className="Todolist">
      <h4>Todo-list</h4>
      <div>총 개수 : {totalCount}</div>
      <div>완료 된 할 일 : {doneCount}</div>
      <div>아직 완료 되지 않은 일 : {notDoneCount}</div>
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

Todolist.defaultProps = {
  todo: [],
};

export default Todolist;
