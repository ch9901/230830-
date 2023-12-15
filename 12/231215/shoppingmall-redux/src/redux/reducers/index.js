//index파일명은 특정한 폴더의 메인이에요 라는 암묵적인 의미임


//reducer combine
import { combineReducers } from "redux";
import productReducer from "./productReducer";
import authenticateReducer from "./authenticateReducer";

export default combineReducers({
  product: productReducer,
  auth: authenticateReducer,
});
