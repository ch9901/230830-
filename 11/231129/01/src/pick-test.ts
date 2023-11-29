import { pick, obj } from "./pick";

const obj: obj = {
  name: "ava",
  age: 22,
  city: "seoul",
  country: "korea",
};

//키 값에 오타가있을 시 오류가 뜨지않고 undefined로 나옴 -> 객체에 대해 타입정의를 해준다면 이런 오류가 나오지않음
console.log(pick(obj, ["age", "name"]), pick(obj, ["city", "country"]));
