import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import EmotionItem from "./EmotionItem";
import { emotionList, getFormattedDate } from "../util";
import "./Editor.css";

const Editor = ({ initData, onSubmit }) => {
  const navigate = useNavigate();
  const today = new Date();
  const initDate = new Date(parseInt(initData.date));

  //initData가 없을 때
  const [state, setState] = useState({
    date: getFormattedDate(today),
    emotionId: 3,
    content: "",
  });

  //initData가 존재할 때
  useEffect(() => {
    if (initData) {
      setState({
        ...initData,
        date: getFormattedDate(initDate),
      });
    }
  }, [initData]);

  const handleChangeDate = (e) => {
    setState({
      //변경되지 않은 값은 그대로 가되, date만 변경시키기
      ...state,
      date: e.target.value,
    });
  };

  const handleChangeContent = (e) => {
    setState({
      ...state,
      content: e.target.value,
    });
  };

  //최적화되기 전 handleChangeEmotion.
  // const handleChangeEmotion = (emotionId) => {
  //   setState({
  //     ...state,
  //     emotionId,
  //   });
  // };
  //useCallback 최적화 -> [] 이므로 아이콘이 바뀔 때만 렌더링
  const handleChangeEmotion = useCallback((emotionId) => {
    setState((state) => ({
      ...state,
      emotionId,
    }));
  }, []);

  const handleSubmit = () => {
    onSubmit(state);
    console.log("작성완료 함수 발동");
  };

  const handleOnGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="Editor">
      <div className="editor_section">
        <h4>오늘의 날짜</h4>
        <div className="input_wrapper">
          <input value={state.date} onChange={handleChangeDate} type="date" />
        </div>
      </div>
      <div className="editor_section">
        <h4>오늘의 감정</h4>
        <div className="input_wrapper emotion_list_wrapper">
          {emotionList.map((it) => (
            <EmotionItem
              key={it.id}
              {...it}
              onClick={handleChangeEmotion}
              isSelected={state.emotionId === it.id}
            />
          ))}
        </div>
      </div>
      <div className="editor_section">
        <h4>오늘의 일기</h4>
        <div className="input_wrapper">
          <textarea
            value={state.content}
            onChange={handleChangeContent}
            placeholder="오늘의 일기 작성"
          ></textarea>
        </div>
      </div>
      <div className="editor_section bottom_section">
        <Button text="취소하기" onClick={handleOnGoBack} />
        <Button text="작성완료" type={"positive"} onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default Editor;
