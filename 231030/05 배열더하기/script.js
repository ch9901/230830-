// let arr = [2, 4, 6, 8, 10];
// const origin = document.querySelector("#origin");
// const result = document.querySelector("#result");
// console.log(result);
// console.log(arr);
// origin.innerText = `[${arr}]`;

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// arr.push(sum);
// console.log(arr);

// result.innerText = `원래 배열의 합은 ${sum}이고, 해당 값을 뒤에 배치하면 [${arr}] 입니다.`;

// 선생님코드
let numbers = [2, 4, 6, 8, 10];
const origin = document.querySelector("#origin");
const result = document.querySelector("#result");
let showArray = (area, arr) => {
  let str = "<table><tr>";
  for (let i = 0; i < arr.length; i++) {
    str += `<td>${arr[i]}</td>`;
  }
  str += "</tr></table>";
  area.innerHTML = str;
};

showArray(origin, numbers);

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

numbers.push(sum);
showArray(result, numbers);
