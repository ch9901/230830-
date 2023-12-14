import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "./Box";
function App() {
  // const [num, setNum] = useState(0);
  const dispatch = useDispatch();
  //store에 저장되어있는 값 찾아오는 메서드
  const count = useSelector((state) => state.count);
  const id = useSelector((state) => state.id);
  const password = useSelector((state) => state.password);

  const numIncrease = () => {
    dispatch({ type: "INCREMENT", payload: { num: 5 } });
  };
  const numDecrease = () => {
    dispatch({ type: "DECREASE", payload: { num: 1 } });
  };

  const dataShow = () => {
    dispatch({ type: "DATASHOW", payload: { id: "David", password: 1234 } });
  };

  return (
    <div className="App">
      <h1>
        id : {id}, password :{password}
      </h1>
      <h1>{count}</h1>
      <button onClick={numIncrease}>+5</button>
      <button onClick={dataShow}>login</button>
      <button onClick={numDecrease}>-1</button>
      <Box />
    </div>
  );
}

export default App;
