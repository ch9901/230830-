import { mergeObjects } from "./mergeobject";

interface Inameable {
  name: string;
}

const nameObj: Inameable = {
  name: "ava",
};

interface Iageble {
  age: number;
}
const ageObj: Iageble = {
  age: 22,
};

const nameAndAge: Inameable & Iageble = mergeObjects(nameObj, ageObj);
console.log(nameAndAge);