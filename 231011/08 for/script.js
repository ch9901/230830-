// let colors = ["red", "blue", "green", "white", "black"];

// for (let i = 0; i < colors.length; i++) {
//   document.write(`${colors[i]}`, "</br>");
// }

// const students = ["Park", "Kim", "Lee", "Kang"];

// for (let i = 0; i < students.length; i++) {
//   document.write(`${students[i]}`, "</br>");
// }

// forEach
// const students = ["Park", "Kim", "Lee", "Kang"];
// //Class형 함수(2015년까지만 하더라도 JS 함수표기법)
// students.forEach(function (student) {
//   document.write(`${student}`, "</br>");
// });

// forEach
// //화살표함수(2015년도 이후에 ECMA5문법이 나오면서 새롭게선보인 함수표기법)
// students.forEach((student)=> {
//   document.write(`${student}`, "</br>");
// });

// for in
const gitBook = {
  title: "깃 허브 입문",
  pubDate: "2023-10-11",
  finished: "true",
};

for (key in gitBook) {
  document.write(`${key}:${gitBook[key]}`, "</br>");
}

//for of
const students = ["Park", "Kim", "Lee", "Kang"];

for (student of students) {
  document.write(`${student}`, "</br>");
}
