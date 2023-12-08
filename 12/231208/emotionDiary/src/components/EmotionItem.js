import React from "react";
import "./EmotionItem.css";

const EmotionItem = ({ id, img, name, onClick, isSelected }) => {
  const handleOnClick = () => {
    onClick(id);
  };

  const selected = [
    "EmotionItem",
    isSelected ? `Emotion_on_${id}` : `Emotion_off`,
  ];

  return (
    <div className={selected.join(" ")} onClick={handleOnClick}>
      <img src={img} alt={`emotion${id}`} />
      <span>{name}</span>
    </div>
  );
};

//최적화-> Editor -> textarea에 글을 쓸 때 더 이상 감정이미지가 랜더링되지않음
export default React.memo(EmotionItem);
