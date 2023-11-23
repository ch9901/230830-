import { range } from "./range";

//타입변환
let reduceSum: number = range(1, 101).reduce(
  (result: number, val: number) => result + val,
  0
);
console.log(reduceSum);