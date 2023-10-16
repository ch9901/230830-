let sum01 = {
  name: "park",
};
//함수에 이름을 지정해주지않았음 .. -> 익명함수라고 부름
// let sum = function (a, b) {
//   return a + b;
// };

// console.log(`함수 실행 결과 : ${sum(1, 2)}`);

//즉시실행함수
// (function (a, b) {
//   let sum = a + b;
//   console.log(`함수실행결과:${sum}`);
// })(100, 200);

//화살표함수
// let hi = function () {
//   return `안녕하세요!`;
// };

// let hi = () => {
//   return `안녕하세요!`;
// };

// let hi = () => `안녕하세요!`;
// console.log(hi());

let multiple = (a, b) => a * b;
console.log(`두 수를 곱한 결과는 ${multiple(10, 20)}`);
