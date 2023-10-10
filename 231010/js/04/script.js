let today = new Date();
console.log(today);

let nowMonth = today.getMonth();
let nowDate = today.getDate();
let nowDay = today.getDay();
console.log(nowMonth + 1 + "월");
console.log(nowDate + "일");
// 일월화수목금토
console.log(nowDay);

document.write("<h1>오늘 날짜 정보</h1>");
document.write(`현재 월 : ${nowMonth + 1} 월</br>`);
document.write(`현재 일 : ${nowDate} 일`);
