const initialState = {
  count: 0,
  id: "",
  password: "",
};

function Reducer(state = initialState, action) {
  // if (action === "INCREMENT") {
  //   //return값으로 전달해야 store에 저장된다 근데 원본값은 그대로 두고 복사해야하므로 전개연산자를 활용하여 값을 주어야한다 !!
  //   return { ...state, count: state.count + 1 };
  // }

  // //if문의 return 값은 종결됐짐나 reducer의 return은 지정되지않음
  // return { ...state };

  console.log(action);
  const { type, payload } = action;

  switch (type) {
    case "INCREMENT":
      return { ...state, count: state.count + action.payload.num };
    case "DECREASE":
      return { ...state, count: state.count - payload.num };
    case "DATASHOW":
      return { ...state, id: payload.id, password: payload.password };
    default:
      return { ...state };
  }
}

export default Reducer;
