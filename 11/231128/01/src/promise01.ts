Promise.resolve(1).then((value) => console.log(value));
Promise.resolve("hello").then((value) => console.log(value));
const array = [1, 2, 3];
Promise.resolve(array).then((value) => console.log(value));

interface obj {
  name: string;
  age: number;
}
const obj: obj = {
  name: "park",
  age: 20,
};
Promise.resolve(obj).then((value) => console.log(value));
