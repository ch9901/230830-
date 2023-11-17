interface INameable {
  name: string;
}

function getName(o: INameable) {
  return o != undefined ? o.name : "unknown name";
}

let n = getName(undefined);
console.log(n);
console.log(getName({ name: "park" }));

//있어도, 없어도 되는 객체키를 정의 : 선택적 프로퍼티 -> 옵셔널 프로퍼티
interface IAgeable {
  age?: number;
}

function getAge(o: IAgeable) {
  return o != undefined && o.age ? o.age : 0;
}
console.log(getAge);
console.log(getAge(null));
console.log(getAge({ age: 32 }));
