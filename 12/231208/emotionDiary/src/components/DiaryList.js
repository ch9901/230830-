import "./DiaryList.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { sortOptionList } from "../util";
import DiaryItem from "./DiaryItem";

const DiaryList = ({ data }) => {
  const navigate = useNavigate();
  //최신순인지 오래된순인지 결정하는 state
  const [sortType, setSortType] = useState("latest");
  //오름차순 내림차순 결정 state
  const [sortedData, setSortedData] = useState([]);
  useEffect(() => {
    const compare = (a, b) => {
      if (sortType === "latest") {
        return Number(b.date) - Number(a.date);
      } else {
        return Number(a.date) - Number(b.date);
      }
    };
    //배열에 있는 데이터를 문자열로 변환, 다시 배열로 변환해서 가져옴
    const copyList = JSON.parse(JSON.stringify(data));
    copyList.sort(compare);
    setSortedData(copyList);
  }, [data, sortType]);
  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };

  //New.js로 이동
  const onClickNew = () => {
    navigate("/New");
  };

  return (
    <div className="DiaryList">
      <div className="menu_wrapper">
        <div className="left_col">
          <select value={sortType} onChange={onChangeSortType}>
            {sortOptionList.map((it, idx) => (
              <option key={idx} value={it.value}>
                {it.name}
              </option>
            ))}
          </select>
        </div>
        <div className="right_col">
          <Button type="positive" text={"새 일기 쓰기"} onClick={onClickNew} />
        </div>
      </div>
      <div className="list_wrapper">
        {sortedData.map((it) => (
          <DiaryItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
