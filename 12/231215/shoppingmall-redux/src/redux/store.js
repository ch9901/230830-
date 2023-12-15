import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// import productReducer from "./reducers/productReducer";

//rootReducer라는 이름으로 가져오래 ..
//뒤에 index지워도 index라는 파일명이 해당 폴더의 메인이라고 인식하기때문에 안적어도 된다.
import rootReducer from "./reducers";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
