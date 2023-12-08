import React, { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DiaryDispatchContext } from "../App";
import useDiary from "../hooks/useDiary";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { setPageTitle } from "../util";

const Edit = () => {
  const { id } = useParams();
  useEffect(() => {
    setPageTitle(`${id}번 일기수정하기`);
  }, []);
  const data = useDiary(id);
  //DiaryDispatchContext에는 함수3개가 포함됨
  const { onUpdate, onDelete } = useContext(DiaryDispatchContext);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const onClickDelete = () => {
    const deleteConfirm = window.confirm(
      "일기를 정말 삭제하시겠습니까? 다시 복구되지 않아요!"
    );
    if (deleteConfirm) {
      onDelete(id);
      navigate("/", { replace: true });
    }
  };

  //data(일기 데이터)를 넣어주어야 어떤 일기를 수정할지 알 수 있다.
  const onSubmit = (data) => {
    const updateConfirm = window.confirm("일기를 정말 수정하시겠습니까?");
    if (updateConfirm) {
      const { date, content, emotionId } = data;
      onUpdate(id, date, content, emotionId);
      navigate("/", { replace: true });
      //수정된 일기는 다시 못보게 하기
    }
  };

  if (!data) {
    return <div>일기를 불러오고 있습니다.</div>;
  } else {
    return (
      <div>
        <Header
          leftChild={<Button text={"뒤로가기"} onClick={goBack} />}
          title={"일기 수정하기"}
          rightChild={
            <Button
              text={"삭제하기"}
              type={"negative"}
              onClick={onClickDelete}
            />
          }
        />
        <Editor initData={data} onSubmit={onSubmit} />
      </div>
    );
  }
};

export default Edit;
