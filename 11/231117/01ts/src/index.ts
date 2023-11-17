import { Iperson, Icompany } from "index01";

// let jack: Iperson = {
//   name: "jack",
//   age: 30,
// };
// console.log(jack);

// let apple: Icompany = {
//   name: "Apple Computer",
//   age: 4,
// };

// console.log(apple);

//위의것을 구조분해할당으로
// let jack: Iperson = { name: "jack", age: 32 };
// let apple: Icompany = { name: "apple Computer", age: 4 };

//위의것을 각각의 변수에 담고싶을 때
// let jack: Iperson = { name: "jack", age: 32 };
// let { name, age } = jack;
// console.log(name, age);

// interface addressType {
//   country: string;
//   city: string;
//   address: string;
//   address2: string;
//   address3: string;
// }

// let address: addressType = {
//   country: "korea",
//   city: "seoul",
//   address: "gangnam",
//   address2: "sinsa-dong",
//   address3: "890 street",
// };

// const { country, city, ...detail } = address;
// console.log(detail);

// //전개연산자를 활용해서 서로다른 배열 혹은 객체값을 하나로 합칠때에도 사용했음
// let a = { x: 0 };
// let b = { y: 0 };

// //중접객체
// // let coord = { a, b };

// //중첩객체의 형식이 아닌 1개의 통합 된 객체값을 도출 -> 서로다른 배열요소를 하나의 배열 안에 아이템으로 가져오고싶을 때
// let coord = { ...a, ...b };
// coord = { ...{ x: 0 }, ...{ y: 0 } };
// console.log(coord);

let person: object = {
  name: "jack",
  age: 30,
};

//타입변환장치
(<{ name: string }>person).name;

//타입 단언!

import { INameable } from "index02";

let obj: object = { name: "jack" };

let name1 = (<{ name: string }>obj).name;
let name2 = (<INameable>obj).name;
let name3 = (obj as INameable).name;
