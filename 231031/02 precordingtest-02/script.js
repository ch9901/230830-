// let result = 0;
// let userNum = parseInt(prompt(`숫자를 입력해주세요`));

// for (let i = 0; i <= userNum; i++) {
//   result += i;
// }

// console.log(result);

//사용자가 입력한 숫자까지 더해서 출력하기

//선생님코드
let a = parseInt(prompt(`숫자입력`));
let s = (n) => {
  let result = 0;
  for (let i = 0; i <= n; i++) {
    result += i;
  }
  return result;
};

console.log(s(a));
