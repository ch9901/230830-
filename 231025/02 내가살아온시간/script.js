// const year = document.querySelector("#year");
// let yearWrite = year.value;
// const month = document.querySelector("#month");
// let monthWrite = month.value;
// const date = document.querySelector("#date");
// let dateWrite = date.value;
// const btn = document.querySelector("#btn");

// console.log(`${yearWrite}-${monthWrite}-${dateWrite}`);
// const myTime = new Date("1999-01-13");
// let myYear = myTime.getFullYear();
// let myMonth = myTime.getMonth();
// let myDate = myTime.getDate();

// // const myTime = new Date(`${yearWrite}-${monthWrite}-${dateWrite}`);
// // console.log(myTime);

// const now = new Date();

// btn.addEventListener("click", result);

// console.log(now);
// const resultArea = document.querySelector("#result");
// // function result() {
// let passedTime = now - myTime;
// let resultTime = Date(passedTime);
// console.log(resultTime);
// // }

/* 
현 시점의 날짜 및 시간정보
new Date()
 */

const birthYear = document.querySelector("#year");
const birthMonth = document.querySelector("#month");
const birthDate = document.querySelector("#date");
const btn = document.querySelector("#btn");

const current = document.querySelector("#current");
const resultDays = document.querySelector("#days");
const resultHrs = document.querySelector("#hours");
const resultYears = document.querySelector("#years");

const today = new Date();
current.innerText = `${today.getFullYear()}년 ${
  today.getMonth() + 1
}월 ${today.getDate()}일 ${today.getHours()}시 ${today.getMinutes()}분    `;

btn.addEventListener("click", (e) => {
  e.preventDefault;
  const birthDay = new Date(
    birthYear.ariaValueMax,
    birthMonth.value - 1,
    birthDate.value
  );

  let passed = today.getTime() - birthDay.getTime;
  let passedYear = Math.floor(passed / (1000 * 60 * 60 * 24 * 30 * 12));

  resultYears = innerText = `내가 태어난지 ${passedYear}년이 지났습니다😆😆`;
});
