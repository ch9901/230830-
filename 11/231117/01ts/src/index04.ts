// function add(a: number, b: number) {
//   return a + b;
// }

// add(1, 2);

// function printMe(name: string, age: number): void {
//   console.log(`${name}, ${age}`);
// }

// console.log(printMe("park", 20));

// let printMe01=function(){

// }

//익명함수
let printMe01: (arg: string, arg1: number) => void = function (name, age) {
  console.log(`${name}, ${age}`);
};

//화살표함수
let printMe02 = () => {};

//타입별칭
type stringNumFunc = (arg0: string, arg1: number) => void;

let f: stringNumFunc = function (a, b) {};
let g: stringNumFunc = function (c, d) {};
