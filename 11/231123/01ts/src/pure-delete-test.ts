import { pureDelete } from "./pure-delete";

const mixedArray: ([] | string[] | { name: string })[] = [
  [],
  { name: "jack" },
  ["description"],
];

interface IObject {
  name: string;
}

const objectsOnly: object[] = pureDelete(mixedArray, (val) =>
  Array.isArray(val)
);
console.log(mixedArray,objectsOnly);