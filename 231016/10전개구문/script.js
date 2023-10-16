// //전개연산자, 전개구문

// let fruits = ["apple", "banana", "grape"];
// console.log(fruits);

// //이 안의 값만 찾고싶을 때
// console.log(...fruits);

// function addNum(a, b) {
//   return a + b;
// }
// console.log(addNum(1, 3));

function addNum(...numbers) {
  let sum = 0;
  //for of문
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

console.log(addNum(1, 3));
console.log(addNum(1, 3, 5, 7));
