import { calculator } from "./methodChain";

let calc = new calculator();
let result = calc.add(1).add(2).multiply(3).multiply(4)
console.log(result);

//여기까지가 타입스크립트를 활용 한 함수의 기본 타입정의

