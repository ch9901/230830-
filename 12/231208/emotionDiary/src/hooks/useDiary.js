import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";

const useDiary = (id) => {
  const data = useContext(DiaryStateContext);
  const [diary, setDiary] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    //파라미터를 통해 거쳐온 id 는 문자열이 된다.
    const matchDiary = data.find((it) => String(it.id) === String(id));
    if (matchDiary) {
      setDiary(matchDiary);
    } else {
      alert("일기가 존재하지 않습니다.");
      navigate("/", { replace: true });
    }
  }, [id, data]);
  return diary;
};

export default useDiary;
