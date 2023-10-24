let today = new Date();

let result = document.querySelector("#result");
let classDay = new Date("2023-08-22");
// console.log(classDay);
let passedTime = today.getTime() - classDay.getTime();
//toDateString():Date에서 날짜 부분만 표시 할 때 사용하는 메서드
// console.log(passedTime);
let passedDay = Math.round(passedTime / (1000 * 60 * 60 * 24));
// console.log(passedDay);


result.innerText = passedDay;
