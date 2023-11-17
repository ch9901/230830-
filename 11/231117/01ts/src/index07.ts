//실행문 방식으로 함수를 표현
const arrow1 = (a: number, b: number) => {
  return a + b;
};

//표현식문 방식
//타입스크립트 & 자바스크립트
//cpu에서 실행 된 함수의 결과값을 알아서 자동으로 알려준다
// 굳이 return 문을 사용하지않아도 결과값을 반환
const arrow2 = (a: number, b: number) => a + b;

//실행문
let x = 10;
if (x > 0) {
  x = 1;
}

//표현식문
if (x > 0) x = 1;

let a = 5,
  b = 1;
if (a > b) console.log(a);
else console.log(b);
