import "./App.css";
import React, { useState, useReducer, useRef, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";

//기본 mockup 데이터 만들기
const mockData = [
  {
    id: "mock1",
    date: new Date("2023/12/02/10:00:03").getTime() - 1,
    content:
      "대통령은 국가의 원수이며, 외국에 대하여 국가를 대표한다. 국무총리는 국무위원의 해임을 대통령에게 건의할 수 있다. 국회의원은 국가이익을 우선하여 양심에 따라 직무를 행한다.피고인의 자백이 고문·폭행·협박·구속의 부당한 장기화 또는 기망 기타의 방법에 의하여 자의로 진술된 것이 아니라고 인정될 때 또는 정식재판에 있어서 피고인의 자백이 그에게 불리한 유일한 증거일 때에는 이를 유죄의 증거로 삼거나 이를 이유로 처벌할 수 없다.",
    emotionId: 1,
  },
  {
    id: "mock2",
    date: new Date("2023/12/4/14:00:12").getTime() - 2,
    content: "임시로 작성된 내용2",
    emotionId: 2,
  },
  {
    id: "mock3",
    date: new Date("2023/12/07/18:34:44").getTime() - 3,
    content: "임시로 작성된 내용3",
    emotionId: 3,
  },
];

//App 밖에 선언
const reducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      //localstorage에 저장
      const newState = [action.data, ...state];
      //localstroage는 무조건 ! 문자열만 갈 수 있음 => 문자열로 변환을 시켜줘야할 필요가있음
      localStorage.setItem("diary", JSON.stringify(newState));
      // return [action.data, ...state];
      //나머지는 초기값 state을 반환
      return newState;
    }

    case "UPDATE": {
      //바뀐거는 다시 localstorage에 저장해야함 근데이거만하면 사라짐 왜냐면 처음에 mock데이터를 불러오라고 했기 때문 -> 그거 설정해줘야 함 ! --> useEffect ->"INIT"
      const newState = state.map((it) =>
        String(it.id) === String(action.data.id) ? { ...action.data } : it
      );
      localStorage.setItem("diary", JSON.stringify(newState));

      //바뀌었으면 새로 적용시키고, 아니면 원래걸로 가자
      // return state.map((it) =>
      //   String(it.id) === String(action.data.id) ? { ...action.data } : it
      // );
      //String으로 미리 바꿔놓아 꼬이지 않게 한다? 배열 안에 들어갈 값이니까?
      // localStorage에 저장해야해서 변수에 저장해놨으니 그걸로 리턴
      return newState;
    }

    case "DELETE": {
      //삭제는 filter를 써서 다시 랜더링하는 방식으로 구현
      //얘도 localstorage에 있는거 삭제해야하므로
      const newState = state.filter(
        (it) => String(it.id) !== String(action.targetId)
      );
      localStorage.setItem("diary", JSON.stringify(newState));
      // return state.filter((it) => String(it.id) !== String(action.targetId));
      return newState;
    }
    default: {
      return state;
    }
  }
};
//state: data에 반영될 정리된 상태
//action으로 값을 받아옴

//context 사용하기(바운더리 생성)-> 부모로부터 데이터를 받아서 뿌려주는 역할
export const DiaryStateContext = React.createContext(); //원본 데이터 값
export const DiaryDispatchContext = React.createContext(); //함수 데이터 값으로 이원화

const App = () => {
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  //dispatch : 상태변화를 일으키고, 구분짓는 함수
  //reducer : 상태 변화에 따라서 실제 실행하게 하는 실행부의 함수
  // [] : state변수에 담길 초기값
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  //여기가렌더링 될 때 data -> mockdata불러오는 것 local에 저장한거 불러오게 해야 함
  useEffect(() => {
    // dispatch({
    // type: "INIT",
    // data: mockData,
    //localstroage에 저장한거 가져오는거
    // });
    const rawData = localStorage.getItem("diary");
    //데이터가 없을때의 예외처리문 -> 가져오는거 오류 방지
    if (!rawData) {
      setIsDataLoaded(true); //처음 로드되어 목업데이터가 data에 가게 되면 isDataLoaded를 true로 한다. => 데이터를 다 주고 찾아오는 방식인데 준비 전에 데이터를 먼저 요청하는 자식 컴포넌트가 생기면 불러오는 중 입니다 라는 문자열 나오게 하는거임. 동기 비동기의 뭐시기 -> 데이터가 다 들어오게 된다면 true로 바꿔서.. -> 캐치테이블에서 json데이터 가져왔던거 오류난거 생각하기
      //정상적으로 데이터가 로드되지 않으면 실행되지 않도록 하기 위함.(된장찌개 비유)
      return;
    }
    //stringify로 보낸거 다시 배열이나, 객체로 들어와야 읽을 수 있음 -> parsing 하다
    const localData = JSON.parse(rawData);
    //데이터가 아무것도 없을 때 -> raw데이터가 없을 때 ! -> 위의 일을 한번에 할 수 있게 데이터도 없으면 length의 길이도 확인하지마 ?
    if (localData.length === 0) {
      setIsDataLoaded(true);
      return;
    }

    idRef.current = localData[0].id + 1;

    dispatch({
      type: "INIT",
      data: localData,
    });
    setIsDataLoaded(true);
  }, []); //의존성 배열 자리에 빈 배열을 넣을 경우, 컴포넌트가 마운트(탄생)되었을 때 한 번만 실행된다.

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
    //dispatch 안에 객체 형태로 값을 쪼갠다.
    dispatch({
      type: "UPDATE",
      data: {
        id: targetId,
        date: new Date().getTime(),
        //새롭게 바뀐 content, emotionId 적용
        content,
        emotionId,
      },
    });
  };

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
      //targetId만 있어도 삭제는 되니까
    });
  };

  //아직 데이터를 가져오지 못했을 때
  if (!isDataLoaded) {
    return <div>데이터를 불러오는 중입니다.</div>;
  } else {
    //dispatch를 활용해서 목업데이터를 정상적으로 넘겨주었을 떄.
    return (
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/New" element={<New />} />
              <Route path="/Diary/:id" element={<Diary />} />
              {/* <Route path="/Diary" element={<Diary />} /> */}
              <Route path="/Edit/:id" element={<Edit />} />
            </Routes>
            {/* 
        <div>
          <Link to={"/"}>Home</Link>
          <Link to={"/New"}>New</Link>
          <Link to={"/Diary"}>Diary</Link>
          <Link to={"/Edit"}>Edit</Link>
        </div> */}
          </div>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    );
  }
};
export default App;
