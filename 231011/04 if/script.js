// let x = 10;
// if (x > 5) {
//   console.log(`x는 5보다 큽니다`);
// }

// let y = 10;
// if (y < 5) {
//   console.log(`y는 5보다 작습니다.`);
// }
// y -= 5;
// console.log(y);

// let userInput = String(prompt("이름을 입력하세요!"));
// // 취소한경우
// if (userInput === null || score != undefined) {
//   alert("취소하셨습니다");
// } else {
//   alert(`당신의 이름은 ${userInput}입니다. 환영합니다!`);
// }

// let score = parseInt(prompt("SCSS 시험 점수를 입력하세요 😎"));
// // 예외조항처리
// if (score != null) {
//   if (score >= 90) {
//     alert("A학점");
//   } else if (score >= 80) {
//     alert("B학점");
//   } else {
//     alert("C학점");
//   }
// }

// let userInput = prompt("이름을 입력하세요");

// if (userInput !== null || userInput !== undefined) {
//   alert(userInput);
// }





// ---------------------------------------------
// let userNumber = parseInt(prompt("숫자를 입력하세요"));
// if (userNumber !== null || userNumber !== undefined || userNumber !== "") {
//   userNumber % 2 === 0
//     ? alert(`${userNumber}:짝수`)
//     : alert(`${userNumber}:홀수`);
// } else {
//   alert(`정상적인 숫자를입력하세요`);
// }

// let userNumber = prompt("숫자를 입력하세요");
// if (userNumber !== null || userNumber !== undefined || userNumber !== "") {
//   userNumber = parseInt(userNumber);
//   userNumber % 2 === 0
//     ? alert(`${userNumber}:짝수`)
//     : alert(`${userNumber}:홀수`);
// } else {
//   alert(`정상적인 숫자를입력하세요`);
// }
// --------------------------------------------------




// let result = confirm("정말로 회원탈퇴를 진행하시겠습니까?");

// if (result) {
//   document.write("정상탈퇴되었습니다.");
// } else {
//   document.write("탈퇴취소되었습니다.");
// }

let month = parseInt(prompt("현재는 몇 월입니까?", "10"));

if (month >= 9 && month <= 11) {
  document.write("독서의 계절 가을이네요");
} else if (month >= 6 && month <= 8) {
  document.write("여행가기 좋은 여름이네요");
} else if (month >= 3 && month <= 5) {
  document.write("햇살 가득한 봄이네요");
} else {
  document.write("스키의 계절 겨울이네요");
}
