import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useDiary from "../hooks/useDiary";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import { getFormattedDate } from "../util";

const Diary = () => {
  const { id } = useParams();
  const data = useDiary(id);
  console.log(data);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const goEdit = () => {
    navigate(`/edit/${id}`);
  };
  if (!data) {
    return <div>일기를 불러오고 있습니다 !</div>;
  } else {
    const { date, emotionId, content } = data;
    const diaryDate = new Date(Number(date));
    const title = `${getFormattedDate(diaryDate)} 기록`;
    return (
      <div>
        <Header
          leftChild={
            <Button text={"Back"} type={"custom"} onClick={goBack} />
          }
          title={title}
          rightChild={
            <Button text={"Edit"} type={"custom"} onClick={goEdit} />
          }
        />
        <Viewer emotionId={emotionId} content={content} />
      </div>
    );
  }
};

export default Diary;
