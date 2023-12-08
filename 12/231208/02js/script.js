// const name = "david";
// const age = 20;

// const person = {
//   // name: name,
//   // age: age,
//   name,
//   age,
// };

// const person={
//   name:"ava",
//   age:25
// }
// const name=person.name
// const age=person.age

// const name02=person[name]
// const age02=person[age]

// const {name01,age01}=person

// const arr = [1, 2, 3, 4];
// const [a, b] = arr;
// console.log(a, b);
// //a=1, b=2
// const [c, d, ...reet] = arr;
// console.log(c, d, rest);
// //c=1, d=2 rest=[3,4]

// const person = {
//   name: "ava",
//   age: 25,
// };

// const person2 = {
//   ...person,
//   address: "seoul",
//   name: "kim",
// };
// console.log(person2);

// const a = [1, 2];
// const b = [...a, 3];
// console.log(b);
// //1,2,3

// const c=[...a,...b]
// console.log(c);
// //1,2,1,2,3

// let person3 = person;
// console.log(person3 === person);
// //얕은복사가 되었다

// let person2 = { ...person };
// console.log(person);
// console.log(person2);
// console.log(person2 === person);

// const coffee = {
//   name: "americano",
//   price: 2500,
// };

const coffee = {
  name: undefined,
};

if (coffee) {
  console.log(coffee.name);
} else {
  console.log("There is no Coffee");
}
//undefined
console.log(coffee ? coffee.name : "There id no coffee");
//undefined
