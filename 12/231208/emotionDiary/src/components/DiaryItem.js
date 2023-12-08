import React from "react";
import "./DiaryItem.css";
import { getEmotionImgById } from "../util";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const DiaryItem = ({ id, emotionId, content, date }) => {
  const navigate = useNavigate();
  //navigate는 이제 함수처럼 작동함. 인자값으로 경로를 받음.
  const goDetail = () => {
    navigate(`/Diary/${id}`);
  };

  const goEdit = () => {
    navigate(`/Edit/${id}`);
  };

  const emotionStyle = ["image_section", `image_section_${emotionId}`];

  const diaryDate = new Date(parseInt(date));

  const editedContent = content.slice(0, 25);
  return (
    <div className="DiaryItem">
      <div className={emotionStyle.join(" ")} onClick={goDetail}>
        <img src={getEmotionImgById(emotionId)} alt={`emotion${emotionId}`} />
      </div>
      <div className="info_section" onClick={goDetail}>
        <div className="date_wrapper">{diaryDate.toLocaleDateString()}</div>
        <div className="content_wrapper">{editedContent}</div>
      </div>
      <div className="button_section">
        <Button onClick={goEdit} text={"수정하기"} />
      </div>
    </div>
  );
};

//최적화하기 (item 하나하나가 재렌더링되지않도록)
export default React.memo(DiaryItem);
