import { range } from "./range";

const array = range(1, 11);

let odds = array.filter((value) => value % 2 != 0);

let evens = array.filter((value) => value % 2 == 0);

console.log(odds, evens);

