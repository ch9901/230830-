import React, { useContext,useEffect } from "react";
import { DiaryDispatchContext } from "../App";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";
import { setPageTitle } from "../util";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";

const New = () => {
  
  useEffect(()=>{
    setPageTitle("Emotion Diary 🤍 New")
  },[])

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
        leftChild={<Button text={"뒤로가기"} onClick={goBack} />}
        title={"새 일기 쓰기"}
      />
      <Editor initData={data} onSubmit={onSubmit} />
    </div>
    //눌러도 일기 추가안됨;;
  );
};

export default New;
