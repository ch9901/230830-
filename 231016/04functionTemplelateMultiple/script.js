//사용자로부터 2개의 값을 받아서 곱한 결과 값을 콘솔창으로 출력

let num1 = parseInt(prompt("곱할 첫번째 숫자를 입력하세요"));
let num2 = parseInt(prompt("곱할 두번째 숫자를 입력하세요"));

function multiple(a, b) {
  return a * b;
}
// console.log(`입력하신 숫자들의 곱은 ${multiple(num1, num2)} 입니다`);

let result = multiple(num1, num2);

console.log(`입력하신 숫자들의 곱은 ${result} 입니다`);
