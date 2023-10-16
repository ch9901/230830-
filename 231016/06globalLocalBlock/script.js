//변수 global 전역, local 지역, block 블록

//지역변수 result는 sum함수 바깥에서 불러올 수 없음
// function sum(a, b) {
//   let result = a + b;

// }
// console.log(`${result}`)

//전역변수 hi는 어디서든(지역이던, 블럭이던) 불러올 수 있음
// let hi = "hello";

// function greeting() {
//   console.log(hi);
// }
// greeting();

//응용쓰
// let hi = "hello";
// function change() {
//   hi = "bye";
// }
// console.log(`${hi}`);
// change();
// console.log(`${hi}`);

//전역변수 factor
const factor = 5;
const num = 10;
function calc() {
  return num * factor;
  //num이 밑에 블록으로 선언되어있으므로 불러들일수없음
  //num을 전역변수화시키던지, 매개변수를 넣어 인자값을 주던지
}

{
  //블록변수 num
  // const num = 10;
  let result = calc();
  document.write(`result:${result}`);
}
