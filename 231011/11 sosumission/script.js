// let num = parseInt(prompt("숫자를 입력해주세요"));

// for (let i = 1; i <= num; i++) {
//   if (num % i === 0) {
//   }
//   document.write(num);
// }

// 1. 사용자가 입력한 값을 저장할 변수 정의
// 2. 소수인지 아닌지 판단할 수 있는 연산정의
// 3. 해당 연산이 끝났을 때, 결과값을 출력할 수 있게 하는 조건문에 관한 정의
const num = parseInt(prompt("자연수를 입력해주세요"));
let isPrime;

if (num === 1) {
  document.write(`${num}은 소수도 합성수도 아닙니다.`);
} else if (num === 2) {
  isPrime = true;
} else {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    } else {
      isPrime = true;
    }
  }
}
if (isPrime) {
  document.write(`${num}은 소수입니다.`);
} else {
  document(`${num}은 소수가 아닙니다`);
}
