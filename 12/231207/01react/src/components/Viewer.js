import React from "react";
import { emotionList } from "../util";
import "./Viewer.css";

const Viewer = ({ emotionId, content }) => {
  const emotionItem = emotionList.find((it) => it.id === emotionId);
  // console.log(emotionItem);
  const emotionImg = [
    "emotion_img_wrapper",
    `emotion_img_wrapper_${emotionId}`,
  ];

  return (
    <div className="Viewer">
      <section>
        <h4>오늘의 이모지</h4>
        <div className={emotionImg.join(" ")}>
          <img src={emotionItem.img} alt={emotionItem.name} />
          <div className="emotion_description">{emotionItem.name}</div>
        </div>
      </section>
      <section>
        <h4>오늘의 일기</h4>
        <div className="content-wrapper">
          <p>{content}</p>
        </div>
      </section>
    </div>
  );
};

export default Viewer;
