import React from "react";
import { useParams } from "react-router-dom";
import useDiary from "../hooks/useDiary";
import Header from "../components/Header";
import Button from "../components/Button";
import { getFormattedDate, setPageTitle } from "../util";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Viewer from "../components/Viewer";

const Diary = () => {
  const { id } = useParams();
  useEffect(() => {
    setPageTitle(`Emotion Diary 🤍 -${id}-`);
  }, []);
  const data = useDiary(id);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const goEdit = () => {
    navigate(`/Edit/${id}`);
  };

  if (!data) {
    //위젯스피너가 들어갈 자리
    return <div>일기를 불러오고 있습니다...</div>;
  } else {
    const { date, emotionId, content } = data;
    const diaryDate = new Date(Number(date));
    const title = `${getFormattedDate(diaryDate)}의 기록`;
    return (
      <div>
        <Header
          leftChild={<Button text={"뒤로 가기"} onClick={goBack} />}
          title={title}
          rightChild={<Button text={"수정하기"} onClick={goEdit} />}
        />
        <Viewer emotionId={emotionId} content={content} />
      </div>
    );
  }
};

export default Diary;
