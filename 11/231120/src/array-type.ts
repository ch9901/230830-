let numArray: number[] = [1, 2, 3];
let strArray: string[] = ["hello", "world"];

//객체의 타입정의를 위함
interface iPerson {
  name: string;
  age?: number;
}

//객체 타입을 타입으로 정의함
type Iperson2 = {
  name: string;
  age: number;
};

let personArray: iPerson[] = [{ name: "jack" }, { name: "jane", age: 35 }];
