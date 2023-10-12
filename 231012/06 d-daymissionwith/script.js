//날짜가져오기
let now = new Date();
console.log(now);

//처음만난날
let firstDay = new Date(`2023-08-22`);
console.log(firstDay);

//변수 = 현시점의 밀리초
let toNow = now.getTime();
console.log(toNow);

//처음만난날의 밀리초
let toFirst = firstDay.getTime();

//경과 된 시간 = 현시간밀리초 - 처음만난날 밀리초
let passedTime = toNow - toFirst;

//경과 된 날짜 = 경과된시간밀리초 / 밀리초to일 구하는공식
let passedDay = Math.ceil(passedTime / (60 * 60 * 24 * 1000));
console.log(passedDay);

//accent 라는 클래스 값에 passedDay 값을 넣을거임
document.querySelector(".accent").innerHTML = passedDay + "일째 😎";

//100일째 되는 날
//변수 = 처음만난날 *100일
function clacDate(days) {
  let future = toFirst + days * (60 * 60 * 24 * 1000);

  let someday = new Date(future);
  console.log(someday);
  let year = someday.getFullYear();
  let month = someday.getMonth() + 1;
  let date = someday.getDate();
  document.querySelector(
    "#date" + days
  ).innerHTML = `${year} 년 ${month}월 ${date} 일`;
}

// //200일
// future = toFirst + 200 * (60 * 60 * 24 * 1000);

// someday = new Date(future);
// console.log(someday);
// year = someday.getFullYear();
// month = someday.getMonth() + 1;
// date = someday.getDate();
// document.querySelector(
//   "#date200"
// ).innerHTML = `${year} 년 ${month}월 ${date} 일`;

//함수 호출
clacDate(100);
clacDate(200);
clacDate(365);
clacDate(500);
