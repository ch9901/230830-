import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { emotionList, getFormattedDate } from "../util";
import EmotionItem from "./EmotionItem";
import Button from "./Button";
import "./Editor.css";

const Editor = ({ initData, onSubmit }) => {
  const navigate = useNavigate();
  const today = new Date();

  const [state, setState] = useState({
    date: getFormattedDate(today),
    emotionId: 3,
    content: "",
  });

  const initDate = new Date(parseInt(initData.date));

  useEffect =
    (() => {
      if (initData) {
        setState({
          ...initData,
          date: getFormattedDate(initDate),
        });
      }
    },
    [initData]);

  const handleChangeDate = (e) => {
    setState({
      ...state,
      date: e.target.value,
    });
    console.log(e.target.value);
  };

  const handleChangeEmotion = useCallback((emotionId) => {
    setState((state) => ({
      ...state,
      emotionId,
    }));
  }, []);

  const handleChangeContent = (e) => {
    setState({
      ...state,
      content: e.target.value,
    });
  };

  const handleSubmit = () => {
    onSubmit(state);
  };
  const handleOnGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="Editor">
      <div className="editor_section">
        <h4>Today's Date</h4>
        <div className="input_wrapper">
          <input type="date" onChange={handleChangeDate} value={state.date} />
        </div>
      </div>
      <div className="editor_section">
        <h4>Today's emotion</h4>
        <div className="input_wrapper emotion_list_wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              key={item.id}
              {...item}
              onClick={handleChangeEmotion}
              isSelected={state.emotionId === item.id}
            />
          ))}
        </div>
      </div>
      <div className="editor_section">
        <h4>Today's journey</h4>
        <div className="input_wrapper">
          <textarea
            placeholder="오늘은 어땠나요?"
            onChange={handleChangeContent}
            value={state.content}
          />
        </div>
      </div>
      <div className="editor_section bottom_section">
        <Button text={"Cancle"} type={"negative"} onClick={handleOnGoBack} />
        <Button text={"Complete"} type={"positive"} onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default Editor;
