// JS에서 날짜정보를 가져올 때 사용하는 메서드(함수)정리
/*
getFullYear() : 연도 정보를 가져올 때
getMonth() : 월 정보를 가져올 때 (**단, 현재 월 -1 (10월 -> 9) 항상 +1을 해줘야 현재 월을 표기할수있음)
getDate() : 일 정보를 가져올 때 
getDay() : 요일 정보를 가져올 때 (**일요일 : 0 ~ 토요일 : 6 ex) 목요일 : 4)
getHours() : 현시점 시간 정보를 가져올 때
getMinutes() : 분 정보를 가져올 때
getSeconds() : 초 정보를 가져올 때
getTime() : (1970년 1월 1일을 부터)경과된 시간 정보를 (**밀리초 개념으로 표기 된다)가져올 때
1밀리초 : 1/1000초
1초 = 1,000밀리초
1분 = 60초 = 60,000밀리초 (60 * 1000)
1시간 = 60분 = 3,600,000 밀리초 (60 * 60 * 1000)
1일 = 24시간 = 86,400,000 밀리초 (24* 60 * 60 * 1000)
*/

//내장함수 Date를 쓰기위해서는 new 라는 머시기 필요!
let today = new Date();
let nowMonth = today.getMonth() + 1;
let nowDate = today.getDate();

document.write(`<h1>오늘 날짜 정보</h1>`);
document.write(`현재 월 : ${nowMonth}월 <br/>`);
document.write(`현재 일 : ${nowDate}일 <br/>`);

let classOpen = new Date(`2023/08/22`);
// document.write(`${classOpen}`);
document.write(`<h1>강의개강날짜정보</h1>`);
let theMonth = classOpen.getMonth() + 1;
let theDate = classOpen.getDate();
document.write(`개강 월 : ${theMonth}월 <br/>`);
document.write(`개강 일 : ${theDate}일 <br/>`);

let classOpen01 = new Date(2023, 08, 22);
// document.write(`${classOpen01}`);
document.write(`<h1>강의개강날짜정보</h1>`);
let theMonth01 = classOpen.getMonth() + 1;
let theDate01 = classOpen.getDate();
document.write(`개강 월 : ${theMonth01}월 <br/>`);
document.write(`개강 일 : ${theDate01}일 <br/>`);
