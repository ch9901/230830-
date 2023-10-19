// 사용자로부터 1을 받아서 해당 숫자가 양수일 경우 "해당숫자는 양수입니다"
// 0일때는 해당숫자는 0입니다 음수는 음수입니다

// function i() {
//   let num = parseInt(prompt("숫자를 입력해주세요"));
//   if (num != null && num != "") {
//     switch (num) {
//       case num >= 1:
//         alert("해당 숫자는 양수입니다");
//         break;
//       case num < 1:
//         alert("해당 숫자는 음수입니다");
//         break;
//       case num === 0:
//         alert("해당 숫자는 0 입니다");
//         break;
//     }
//   }
// }

// i();

// 선생님코드

// let number = parseInt(prompt("숫자를 입력하세요"));
// if (!isNaN(number)) {
//   if (number > 0) {
//     alert(`${number}는 양수입니다`);
//   } else if (number < 0) {
//     alert(`${number}는 음수입니다`);
//   } else {
//     alert(`${number}는 0입니다.`);
//   }
// }

//코드 클린..
const isPositive = (n) => {
  if (n > 0) {
    alert(`${n}는 양수입니다`);
  } else if (n < 0) {
    alert(`${n}는 음수입니다`);
  } else {
    alert(`${n}는 0입니다.`);
  }
};

let number = parseInt(prompt("숫자를 입력하세요"));
if (!isNaN(number)) {
  isPositive(number);
}
