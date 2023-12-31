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

export default EmotionItem;
