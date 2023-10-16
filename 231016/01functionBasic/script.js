// function 함수명(매개변수){
//   함수 실행문
// }

/*
변수명, 함수명 -> 카멜 표기법, 스네이크 표기법
ex ) calcsum -> calcSum
*/

//매개변수가 존재하지않는 함수
function calcSum() {
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += i;
  }
  console.log(`1-10까지 더 하면 ${sum}입니다.`);
}
calcSum();

//매개변수가 존재하는 함수
function sum(a, b) {
  let result = a + b;
  alert(`${a}+${b}=${result}`);
}

sum(4, 6);
