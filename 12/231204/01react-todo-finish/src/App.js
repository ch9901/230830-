import userEvent from "@testing-library/user-event";
import "./App.css";
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import Todolist from "./components/Todolist";
import React, { useReducer, useRef, useCallback, useMemo } from "react";

//데이터 생성 ---> 1순위
export const TodoStateContext = React.createContext();
//데이터생성 이후 업데이트, 삭제
export const TodoDispatchContext = React.createContext();

//투두리스트 목업데이터
const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "개인사이트 만들기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "자기소개서 수정하기",
    createdDate: new Date().getTime(),
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.newItem, ...state];

    case "UPDATE":
      return state.map((it) =>
        it.id === action.targetId ? { ...it, isDone: !it.isDone } : it
      );
    case "DELETE":
      return state.filter((it) => it.id !== action.targetId);
    default:
      return state;
  }
}

function App() {
  // const [todo, setTodo] = useState(mockTodo);
  const [todo, dispatch] = useReducer(reducer, mockTodo);
  console.log(todo);
  const idRef = useRef(3);
  //버튼을 눌렀을 때 어떠한 데이터가 생성이 된다
  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      newItem: {
        id: idRef.current,
        isDone: false,
        content,
        createdDate: new Date().getTime(),
      },
    });
    idRef.current += 1;
  };

  //check했을 때 checked -> true로 바꿔주는거
  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId,
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  }, []);
  const memoizedDispatches = useMemo(() => {
    return onCreate, onUpdate, onDelete;
    //
  }, []);

  return (
    <div className="App">
      <Header />
      <TodoStateContext.Provider value={todo}>
        <TodoDispatchContext.Provider value={memoizedDispatches}>
          <TodoEditor />
          <Todolist />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
