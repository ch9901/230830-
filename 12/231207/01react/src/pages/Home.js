import React from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import { useState, useContext, useEffect } from "react";
import { DiaryStateContext } from "../App";
import { getMonthRangeByDate } from "../util";
import DiaryList from "../components/DiaryList";

const Home = () => {
  // const moveMonth = (date, moveMonth) => {
  //   const curTimeStamp = date.getTime();
  //   const curMonth = date.getMonth();
  //   const resDate = new Date(curTimeStamp);

  //   resDate.setMonth(curMonth + moveMonth);

  //   return resDate;
  // };

  // const dateA = new Date("2023-12-06");
  // console.log(dateA);
  // const dateB = moveMonth(dateA, 1);
  // console.log(dateB);
  // const dateC = moveMonth(dateA, -1);
  // console.log(dateC);

  // const dateArray = [
  //   new Date("2023-10-13"),
  //   new Date("2023-10-07"),
  //   new Date("2023-02-28"),
  //   new Date("2023-08-21"),
  //   new Date("2023-12-06"),
  // ];
  // const filterThisMonth = (pivotDate, dateArray) => {
  //   const year = pivotDate.getFullYear();
  //   const month = pivotDate.getMonth();

  //   const startDay = new Date(year, month, 1, 0, 0, 0, 0);
  //   const endDay = new Date(year, month + 1, 0, 23, 59, 59);

  //   const resArr = dateArray.filter(
  //     (item) =>
  //       startDay.getTime() <= item.getTime() &&
  //       item.getTime() <= endDay.getTime()
  //   );

  //   return resArr;
  // };

  // const today01 = new Date("2023-10-11/00:00:00");
  // const filteredArray = filterThisMonth(today01, dateArray);
  // console.log(filteredArray);

  const data = useContext(DiaryStateContext);
  const today = new Date();
  const [pivotDate, setpivotDate] = useState(today);
  const [filteredData, setFilterdData] = useState([]);

  useEffect(() => {
    if (data.length >= 1) {
      const { beginTimeStamp, endTimeStamp } = getMonthRangeByDate(pivotDate);
      setFilterdData(
        data.filter(
          (item) => beginTimeStamp <= item.date && item.date <= endTimeStamp
        )
      );
    } else {
      setFilterdData([]);
    }
  }, [data, pivotDate]);

  const pivotYear = pivotDate.getFullYear();
  const pivotMonth = pivotDate.getMonth() + 1;

  const headerTitle = `${pivotYear}년 - ${pivotMonth}월`;

  const onIncreaseMonth = () => {
    setpivotDate(new Date(pivotYear, pivotMonth));
  };
  const onDecreaseMonth = () => {
    setpivotDate(new Date(pivotYear, pivotMonth - 2));
  };

  return (
    <div>
      <Header
        leftChild={
          <Button text={"<"} type={"custom"} onClick={onDecreaseMonth} />
        }
        title={headerTitle}
        rightChild={
          <Button text={">"} type={"custom"} onClick={onIncreaseMonth} />
        }
      />
      <DiaryList data={filteredData} />
    </div>
  );
};

export default Home;
