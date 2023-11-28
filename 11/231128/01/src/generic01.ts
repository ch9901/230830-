//제네릭 -> 배열의 타입정의할때
const arr: number[] = [1, 2, 3];
//배열안에 입력될 아이템의 타입이 미정인 상태에서 배열의 타입을 정의해야하는 경우
const arr01: [number, string, boolean] = [1, "2", true];

const func = <T>(array: T[]) => {};

function g1<T>(a: T): void {
  console.log(`test: ${a}`);
}

//인자값이 동일한 타입이 아닐 때
function g2<T, Q>(a: T, b: Q): void {
  console.log(`test:`);
}
const g3 = <T>(a: T): void => {};
const g4 = <T, Q>(a: T, b: Q): void => {};

//함수의 타입을 정의할 때, 타입시그니처
//시그니처를 정의할 때 타입별칭
//타입별칭 ? type

type TypeFunc = <T>(arg: T) => void;
const test: TypeFunc = (a) => {};

type TypeFunc2 = <T, Q>(arg1: T, arg2: Q) => void;
const test2: TypeFunc2 = (a, b) => {};

type TypeFunc3 = <T, Q, R>(arg1: T, arg2: Q) => R;
const test3: TypeFunc3 = (a, b) => c;
