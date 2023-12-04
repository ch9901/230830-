import React, { useState, useReducer } from "react";
//state : 초기값을 받음
//action : 이 객체에 따라 state의 값이 변화함
function reducer(state, action) {
  switch (action.type) {
    case "INCREASE":
      return state + action.data;

    case "DECREASE":
      return state - action.data;

    case "INIT":
      return 0;
    default:
      return state;
  }
}

const TestComp = () => {
  // const [count, setCount] = useState(0);
  // const onIncrease = () => {
  //   setCount(count + 1);
  // };
  // const onDecrease = () => {
  //   setCount(count - 1);
  // };

  const [count, dispatch] = useReducer(reducer, 0);
  const onIncrease = () => dispatch({ type: "INCREASE", data: 1 });
  const onDecrease = () => dispatch({ type: "DECREASE", data: 1 });
  const onInit = () => dispatch({ type: "INIT" });

  return (
    <div>
      <h4>테스트 컴포넌트</h4>
      <div>
        <bold>{count}</bold>
      </div>
      <div>
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
        <button onClick={onInit}>0</button>
      </div>
    </div>
  );
};

export default TestComp;
