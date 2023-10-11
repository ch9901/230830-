// 10보다 큰 숫자만 출력

// const i = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
// for (a of i) {
//   if (a > 10) {
//     document.write(a + ", ");
//   }
// }

// 선생님코드
const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 10) {
    document.write(`${arr[i]} </br>`);
  }
}
