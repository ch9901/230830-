import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryDispatchContext } from "../App";
import { DiaryStateContext } from "../App";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";

const New = () => {
  const { onCreate } = useContext(DiaryDispatchContext);
  const data = useContext(DiaryStateContext);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const onSubmit = (data) => {
    const { date, content, emotionId } = data;
    onCreate(date, content, emotionId);
    navigate("/", { replace: true });
  };
  return (
    <div>
      <Header
        leftChild={<Button text={"Back"} type={"custom"} onClick={goBack} />}
        title={"새 일기 작성"}
      />
      <Editor initData={data} onSubmit={onSubmit} />
    </div>
  );
};

export default New;
