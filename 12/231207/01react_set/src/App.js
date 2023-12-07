import "./App.css";
import { Routes, Route } from "react-router-dom";
import React, { useReducer, useRef, useEffect, useState } from "react";
import Diary from "./pages/Diary";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import New from "./pages/New";

const mockData = [
  {
    id: "mock1",
    date: new Date().getTime() - 1,
    content:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus adipisci omnis explicabo autem, veniam maiores nesciunt culpa facere iusto sint voluptatem amet ipsam non nihil eos accusantium facilis modi ratione.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus adipisci omnis explicabo autem, veniam maiores nesciunt culpa facere iusto sint voluptatem amet ipsam non nihil eos accusantium facilis modi ratione.",
    emotionId: 1,
  },
  {
    id: "mock2",
    date: new Date().getTime() - 2,
    content: "오늘의 일기",
    emotionId: 3,
  },
  {
    id: "mock3",
    date: new Date().getTime() - 3,
    content: "오늘의 일기",
    emotionId: 2,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE": {
      return [action.data, ...state];
    }
    case "UPDATE": {
      return state.map((item) =>
        String(item.id) === String(action.targetId) ? { ...action.data } : it
      );
    }

    case "DELETE": {
      return state.filter((item) => String(item.id) !== String(item.targetId));
    }
    case "INIT": {
      return mockData;
    }
    default:
      return state;
  }
};

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();
function App() {
  const [isDataLoaded, setIsDateLoaded] = useState(false);
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);
  useEffect(() => {
    dispatch({
      type: "INIT",
      data: mockData,
    });
    setIsDateLoaded(true);
  }, []);

  const onCreate = (date, content, emotionId) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current,
        date: new Date(date).getTime(),
        content,
        emotionId,
      },
    });
    idRef.current += 1;
  };

  const onUpdate = (targetId, date, content, emotionId) => {
    dispatch({
      type: "UPDATE",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotionId,
      },
    });
  };

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  };
  if (!isDataLoaded) {
    return <div>데이터를 불러오는 중 입니다!</div>;
  } else {
    return (
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onDelete, onUpdate }}>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/new" element={<New />} />
              <Route path="/diary/:id" element={<Diary />} />
              <Route path="/edit/:id" element={<Edit />} />
            </Routes>
          </div>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    );
  }
}

export default App;
