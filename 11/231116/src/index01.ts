//public, private : 접근연산자
//private : 값 변경 절대 안하겠음!! 이라는 뜻

// abstract class Person4 {
//   constructor(public theName: string, public theAge: number) {}
//   get name() {
//     return this.theName;
//   }
//   get age() {
//     return this.theAge;
//   }
// }

// class Person7 extends Person4 {
//   constructor(theName: string, theAge: number) {
//     super(theName, theAge);
//   }
// }

// const personT1 = new Person7("park", 10);
// console.log(personT1);

abstract class AbstractPerson5 {
  abstract name: string;
  constructor(public age?: number) {}
}

class Person5 extends AbstractPerson5 {
  constructor(public name: string, age?: number) {
    super(age);
  }
}

let jack5 = new Person5("jack", 32);
console.log(jack5);

class A {
  public initValue = 1;
  static initValue01 = 1;
  public initTarget = "test";
}

const test = new A();
console.log(test);

//Q. class생성자로 생성된 객체를 통해서만 반드시 객체안에 포함된 값을 가져갈 수 있는것일까?
// const test01=A.initValue; // 이거 안댐 되게하려면 class A 안에있는 initValue가 public이 아닌 static으로 선언되어있어야함
const test01 = A.initValue01;
console.log(test01);

class ClassExample {
  public _field: string;

  get field() {
    return this._field;
  }
  set field(theField: string) {
    this._field = theField;
  }

  public printField() {
    console.log(`field:${this._field}`);
  }
}

let ClassExample01 = new ClassExample();
ClassExample01._field = "hi";
let test07 = ClassExample01.printField();
let test08 = ClassExample01.field;
console.log(test07);
console.log(test08);
