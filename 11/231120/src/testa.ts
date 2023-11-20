// import { A } from "./a";

import { Agent } from "http";

// let a: A = new A();
// a.method();

// 클래스 생성자로 생성 된 것은 다이렉트로 값을 가져오지못한다
// class A {
//   initValue = 1;
// }
// // 다이렉트로 못가져옴
// // let initVal = A.initValue;

// let initVal = new A();
// let result = initVal.initValue;
// console.log(initVal.initValue);

// 클래스 생성자로 생성 된 것은 다이렉트로 값을 가져오지못하는것을 해결하고자 static을 써서 다이렉트로 가져올수있게 만들었음

class A {
  static initValue = 1;
}

let initVal = A.initValue;
console.log(initVal);

class C {
  static whoAreYou(): string {
    return "Im class C";
  }
}

console.log(C.whoAreYou());

const body = document.querySelector("body");
body.classList.toggle("active");

class calculator {
  //오버로드
  name: string;
  age: number;
  constructor(name: string, age: number) {
    //생성자함수
    name: name;
    age: age;
  }
}
