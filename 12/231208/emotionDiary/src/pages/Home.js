import React, { useState, useContext, useEffect } from "react";
import { DiaryStateContext } from "../App";
import { getMonthRangeByDate, setPageTitle } from "../util";
import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";
// import Button from "../components/Button";
// import Header from "../components/Header";
// import Editor from "../components/Editor";

const Home = () => {
  // const moveMonth = (date, moveMonth) => {
  //   const curTimestamp = date.getTime();
  //   const curMonth = date.getMonth();
  //   const resDate = new Date(curTimestamp);
  //   resDate.setMonth(curMonth + moveMonth);
  //   return resDate; //예를 들어, 이 함수는 다음 연도의 1월을 반환하는 값
  // };

  // const dateA = new Date("2022-12-06");
  // console.log(dateA);
  // const dateB = moveMonth(dateA, 1);
  // console.log(dateB);
  // const dateC = moveMonth(dateA, -1);
  // console.log(dateC);

  // const dateArray = [
  //   new Date("2023-10-07"),
  //   new Date("2023-10-31"),
  //   new Date("2023-11-01"),
  //   new Date("2023-9-30"),
  //   new Date("2023-10-11"),
  // ];

  // const filterThisMonth = (pivotDate, dateArray) => {
  //   const year = pivotDate.getFullYear();
  //   const month = pivotDate.getMonth();

  //   const startDay = new Date(year, month, 1, 0, 0, 0, 0); //첫번쨰 0은 endDay와자리수맞추기위함
  //   const endDay = new Date(year, month + 1, 0, 23, 59, 59);
  //   //JS에서는 월의 끝 값을 "12월 0일" 로 정의한다
  //   const resArr = dateArray.filter(
  //     (it) =>
  //       startDay.getTime() <= it.getTime() && it.getTime() <= endDay.getTime()
  //   );

  //   return resArr;
  // };

  // const today01 = new Date("2023-10-10/00:00:00");
  // const filteredArray = filterThisMonth(today01, dateArray);
  // console.log(filteredArray);

  const data = useContext(DiaryStateContext); //안나옴
  const today = new Date();
  //pivotDate = 헤더 중앙에 보여지는 날짜
  const [pivotDate, setPivotDate] = useState(today);
  const [filteredData, setFillteredData] = useState([]);
  useEffect(() => {
    setPageTitle("Emotion Diary 🤍 Home");
  }, []);
  useEffect(() => {
    //일기가 뭐라도 존재한다면
    if (data.length >= 1) {
      //getMonthRangeByDate의 반환값은 객체!
      const { beginTimeStamp, endTimeStamp } = getMonthRangeByDate(pivotDate);
      setFillteredData(
        data.filter(
          (it) => beginTimeStamp <= it.date && it.date <= endTimeStamp
        )
      );
    } else {
      setFillteredData([]);
    }
  }, [data, pivotDate]);
  const pivotYear = pivotDate.getFullYear();
  const pivotMonth = pivotDate.getMonth() + 1;
  const headerTitle = `${pivotYear}년 ${pivotMonth}월`;

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotYear, pivotMonth));
  };
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotYear, pivotMonth - 2));
  };

  return (
    <div>
      <Header
        leftChild={<Button text={"<"} onClick={onDecreaseMonth} />}
        title={headerTitle}
        rightChild={<Button text={">"} onClick={onIncreaseMonth} />}
      />
      <DiaryList data={filteredData} />
    </div>
  );
};

export default Home;
