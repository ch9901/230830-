//사용자로부터 두개의 숫자를 받아라 2개 숫자의 최대공약수를 구하는 함수 설계하고 실행시켜라
// 두개의 수 모두 나누어떨어지는 수
// for (let i = 1; i < 3; i++) {
//   let i = parseInt(prompt("최대공약수를 구할 첫번째 수를 입력해주세요"));
//   console.log(i);
// }

// let num1 = parseInt(prompt("최대공약수를 구할 첫번째 수를 입력해주세요"));
// let num2 = parseInt(prompt("최대공약수를 구할 두번째 수를 입력해주세요"));

// function mission(num1, num2) {
//   if (num1 > num2) {
//     for (i = 2; i <= num1; i++) {
//       if (num1 % i == 0 && num2 % i == 0) {
//         alert(`두 수의 최대공약수는${i}입니다 `);
//       }
//     }
//   } else {
//     for (i = 2; i <= num2; i++) {
//       if (num1 % i == 0 && num2 % i == 0) {
//         alert(`두 수의 최대공약수는${i}입니다 `);
//       }
//     }
//   }
// }

// mission();



//선생님 코드
const f = parseInt(prompt("첫번째 숫자를 입력해주세요"));
const s = parseInt(prompt("첫번째 숫자를 입력해주세요"));

//최대공약수를 구하는 기능을 구현
function getGCD(n, m) {
  //삼항연산자 사용해서 큰수를 담음
  let max = n > m ? n : m;
  let GCD = 0;
  for (let i = 1; i <= max; i++) {
    if (n % i === 0 && m % i === 0) {
      GCD = i;
    }
  }
  return GCD;
}
console.log(`${f}와 ${s}의 최대공약수는 ${getGCD(f, s)}`);
