// let arr = [1, 3, 5, 1, 4, 3, 9];

// let obj = {
//   title: "js",
//   page: 365,
//   title: "ts",
// };

let numSet1 = new Set();
console.log(numSet1);

numSet1.add("one").add("two");
console.log(numSet1);

let numSet2 = new Set([1, 2, 3]);
console.log(numSet2);

let numSet3 = new Set([1, 2, 3, 1, 2, 4, 2, 5]);
console.log(numSet3);
console.log(numSet3.add(7));

console.log(numSet3.delete(7));