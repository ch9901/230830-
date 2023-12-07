import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useDiary from "../hooks/useDiary";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import EmotionItem from "../components/EmotionItem";
import { DiaryDispatchContext } from "../App";

const Edit = () => {
  const { id } = useParams();
  const data = useDiary(id);
  const navigate = useNavigate();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);

  const onSubmit = (data) => {
    const updateConfirm = window.confirm("일기를 정말 수정할까요?🤨");
    if (updateConfirm) {
      const { date, content, emotionId } = data;
      onUpdate(id, date, content, emotionId);
      navigate("/", { replace: true });
    }
  };

  const onClickDelete = () => {
    const deleteConfirm = window.confirm(
      "일기를 정말 삭제할까요? 다시 복구되지 않아요🤨"
    );
    if (deleteConfirm) {
      onDelete(id);
      navigate("/", { replace: true });
    }
  };
  const goback = () => {
    navigate(-1);
  };
  if (!data) {
    return <div>일기를 불러오고있습니다 !</div>;
  } else {
    return (
      <div>
        <Header
          leftChild={
            <Button text={"< Back"} onClick={goback} type={"custom"} />
          }
          title={"일기 수정하기"}
          rightChild={
            <Button text={"Delete"} onClick={onClickDelete} type={"negative"} />
          }
        />
        <Editor initData={data} onSubmit={onSubmit} />
      </div>
    );
  }
};

export default Edit;
