// const impure = () => {
//   prompt();
// };

// const sample01 = 1;
// const impure = (sample01: number) => {};

const a = 1;
const b = 2;
const pureFunc = (a: number, b: number) => {
  return a + b;
};

let array = [];
const test01 = (array: number[]) => {
  array.push(1);
  array.splice(0, 1);
};

let origin = 1;
let copied = origin;
copied += 2;
console.log(origin, copied);

const oArray = [1, 2, 3, 4];
const deepCopiedArray = [...oArray];
deepCopiedArray[0] = 0;
console.log(oArray, deepCopiedArray);
