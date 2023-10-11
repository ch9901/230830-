// while
let stars = parseInt(prompt("별의 갯수"));
// if (stars !== null || stars !== "") {
//   while (stars > 0) {
//     document.write("*");
//     stars--;
//   }
// }

// do while - 일단실행시켜! 그리고 조건값 따져 : 0 입력시에도 * 하나 찍힘
if (stars !== null || stars !== "") {
  do {
    document.write("*");
    stars--;
  } while (stars > 0);
}
