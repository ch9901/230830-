import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./DiaryList.css";
import Button from "./Button";
import { sortOptionList } from "../util";

const DiaryList = ({ data }) => {
  const navigate = useNavigate();
  //최신순인지 오랜ㄷ순인지 결정짓게하는 state
  const [sortType, setSortType] = useState("latest");
  //오름차순인지 내림차순인지 결정짓게하는 state
  const [sortedData, setSortedData] = useState();
  useEffect(() => {
    const compare = (a, b) => {
      if (sortType === "latest") {
        return Number(b.date) - Number(a.date);
      } else {
        return Number(a.date) - Number(b.date);
      }
    };
    //그냥 sort시키면 원본데이터의 순서가 바뀌므로 그걸 방지하고자 데이터를 복사해서 사용함
    //하단 문법은 배열을 문자열값으로 바꾸고 >> 다시 배열로
    const copyList = JSON.parse(JSON.stringify(data));
    data.sort(compare);
    setSortedData(data);
  }, [data, sortType]);

  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };

  const onClickNew = () => {
    navigate("/new");
  };

  return (
    <div className="DiaryList">
      <div className="menu_wrapper">
        <div className="left_col">
          <select value={sortType} onChange={onChangeSortType}>
            {sortOptionList.map((item, index) => (
              <option key={index} value={item.value}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className="right_col">
          <Button type={"positive"} text={"새 일기쓰기"} onClick={onClickNew} />
        </div>
      </div>
    </div>
  );
};

export default DiaryList;
