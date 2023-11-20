import { NumToNumFunc, add } from "./add";

let fn: NumToNumFunc = add(1);
let result = fn(2);
console.log(result);
console.log(add(1)(2));
