import { arrayLength, isEmpty } from "./array.length";

let numberArr: number[] = [1, 2, 3];
let stringArr: string[] = ["hello", "world"];

interface iPerson {
  name: string;
  age?: number;
}

let personArr: iPerson[] = [{ name: "jack" }, { name: "chan", age: 20 }];
console.log(
  arrayLength(numberArr),
  arrayLength(stringArr),
  arrayLength(personArr),
  isEmpty([]),
  isEmpty([1])
);
