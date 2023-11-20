// //객체타입정의
// interface iNameable {
//   name: string;
//   age: number;
// }

// const jack: iNameable = {
//   name: "jack",
//   age: 20,
// };

type Person = {
  name: string;
  age: number;
};

const makePerson = (name: string, age: number = 10): Person => ({name,age});

console.log(makePerson("jack", 30));
