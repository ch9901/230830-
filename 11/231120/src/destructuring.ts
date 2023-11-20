type Person = {
  name: string;
  age: number;
};

const printPerson = ({ name, age }: Person): void =>
  console.log(`name:${name}, age: ${age}`);

printPerson({ name: "park", age: 10 });

type keyType = {
  [key: string]: string;
};

const makeObject = (key: string, value: string): keyType => ({ [key]: value });
console.log(makeObject("name", "chan"));
