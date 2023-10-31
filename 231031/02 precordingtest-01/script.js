//사용자로부터 3개의 숫자를 받아서 가장 작은 값을 출력하는 프로그램

// numbers = [];
// for (let i = 0; i < 3; i++) {
//   numbers[i] = prompt(`${i + 1}번째 숫자를 입력해주세요`);
// }
// console.log(numbers);


let a = parseInt(prompt(`첫번째 숫자를 입력해주세요`));
let b = parseInt(prompt(`두번째 숫자를 입력해주세요`));
let c = parseInt(prompt(`세번째 숫자를 입력해주세요`));

let numTotal = (a, b, c) => {
  let result;
  if (a < b) {
    result = a;
  } else {
    result = b;
  }
  if (c < result) {
    result = c;
  }
  return result;
};

console.log(numTotal(a, b, c));
