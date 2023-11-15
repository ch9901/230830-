let n: number = 1;
let b: boolean = true;
let s: string = "hello";
let o: object = {};

// n = "hello";
// b=1;
// s=false;

let n01 = 3;

let a: any = 0;
a = "hello";

let u: undefined = undefined;

//변수에 대한 타입은 찾음
//함수, 객체에 대한 타입을 정의할때

let o2: object = {
  name: "park",
  age: "100",
};

o2 = {
  first: 1,
  second: 2,
};

interface informationPerson {
  name: string;
  age: number;
}
let good: informationPerson = {
  name: "jack",
  age: 32,
};

// let bad1: informationPerson = {
//   name: "jack",
// };

// let bad2: informationPerson = {
//   name: "jack",
//   age: 22,
//   etc: true,
// };

interface IPerson2 {
  name: string;
  age: number;
  //optional property
  etc?: boolean;
}

let good1: IPerson2 = {
  name: "kim",
  age: 20,
};

let good2: IPerson2 = {
  name: "kim",
  age: 20,
  etc: true,
};

//익명인터페이스
let ai: {
  name: string;
  age: number;
} = {
  name: "ajck",
  age: 32,
};

//함수에서 익명 인터페이스가 사용되는 경우
function printMe(me: { name: string; age: number; etc?: boolean }) {
  console.log(me.etc ? `${me.name}${me.age}${me.etc}` : `${me.name}${me.age}`);
}
// printMe(ai);

class Person5 {
  name?: string;
  age?: number;
}

let jack1: Person5 = new Person5();
jack1.name = "jack";
jack1.age = 30;

console.log(jack1);