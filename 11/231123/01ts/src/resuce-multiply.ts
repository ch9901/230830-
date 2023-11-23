import { range } from "./range";

let reduceMultiply: number = range(1, 11).reduce(
  (result: number, value: number) => result * value,
  1
);

console.log(reduceMultiply);
