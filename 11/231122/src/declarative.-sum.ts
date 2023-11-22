import { range } from "./range";
import { fold } from "./fold";
import { filter } from "./filter";
import { map } from "./map";

let numbers = range(1, 101);
const isOdd = (n: number): boolean => n % 2 != 0;
const isEven = (n: number): boolean => n % 2 == 0;
// let result = fold(
//   filter(numbers, isEven),
//   (result, value) => result + value,
//   0
// );
// console.log(result);

let result = fold(
  map(numbers, (value) => value * value),
  (result, value) => result + value,
  0
);
console.log(result);
