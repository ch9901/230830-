import React from "react";
import "./DiaryItem.css";
import { getEmotionById } from "../util";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const DiaryItem = ({ id, emotionId, content, date }) => {
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/diary/${id}`);
  };
  const goEdit = () => {
    navigate(`/edit/${id}`);
  };
  const emotionStyle = ["img_section", `img_section_${emotionId}`];
  const diaryDate = new Date(parseInt(date));
  const editedContent = content.slice(0, 25);
  return (
    <div className="DiaryItem">
      <div className={emotionStyle.join(" ")} onClick={goDetail}>
        <img src={getEmotionById(emotionId)} alt={emotionId} />
      </div>
      <div className="info_section" onClick={goDetail}>
        <div className="date_wrapper">
          {(diaryDate.toLocaleDateString(), diaryDate.toLocaleString())}
        </div>
        <div className="content_wrapper">{editedContent}</div>
      </div>
      <div className="button_section">
        <Button onClick={goEdit} text={"수정하기"} type={"custom"} />
      </div>
    </div>
  );
};

export default DiaryItem;
