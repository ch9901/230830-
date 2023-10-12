let today = new Date();
let nowYear = today.getFullYear();
let theDate = new Date(nowYear, 07, 22);

let wantDate = today.getTime() - theDate.getTime();

let result = Math.ceil(wantDate / (60 * 60 * 24 * 1000));
document.write(`우리 만난지 ${result}일`);

// let hundredDay = theDate.getDate() + 24 * 60 * 60 * 1000 * 100;
// document.write(hundredDay);

// let resulthundred = Math.ceil(hundredDay / (60 * 60 * 24 * 1000));

// document.write(resulthundred);

// let final = hundredDay / (60 * 60 * 24 * 1000);

let a = today.getTime();
//1970 .1.1~2023.08.22 + 100일
let b = a + 60 * 60 * 24 * 1000 * 100;
// document.write(`${a}<br>`);
// document.write(`${b}<br>`);

let c = b + a;


let hundredResult = b / (60 * 60 * 24 * 1000);

let knowDay = Math.ceil(b / (60 * 60 * 24 * 1000));

document.write(knowDay);
