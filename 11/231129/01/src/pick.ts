export interface obj {
  name: string;
  age: number;
  city: string;
  country: string;
}

// const obj: obj = {
//   name: "ava",
//   age: 22,
//   city: "seoul",
//   country: "korea",
// };

// //name, age의 key를 가진애들만 추려서 배열을 만들고시펑
// pick(obj,["name","age"])

// export const pick = (obj, keys) =>
//   keys
//     .map((key) => ({ [key]: obj[key] }))
//     .reduce((result, value) => ({ ...result, ...value }), {});


//타입정의를 위한 함수 재 설정
export const pick = <T,K extends keyof T>(obj:T, keys:K[]) =>
  keys
    .map((key) => ({ [key]: obj[key] }))
    .reduce((result, value) => ({ ...result, ...value }), {});
