// 배열, 함수의 아이템 혹은 매개변수의 타입이 미 지정 상태일때, 타입변수를 활용해서 타입을 정의했다->제네릭타입
//객체의 타입을 정의할때에도 제네릭 타이븡ㄹ 적용할수있음

interface Iperson {
  name: string;
  age?: number;
}

const obj01: Iperson = {
  name: "jeon",
  age: 20,
};

//객체는 키와 밸류로 구성이 되어있음 -> property
//key안에 담길 value의 값이 미정인 경우
//사용자가 선택하는 옵션값에 따라서 key안에 담겨야하는 값이 가변적으로 바뀌어야하는 경우가 발생

//제네릭 인터페이스 사용
interface IValuable<T> {
  value: T;
}

//제네릭 총집합

//함수
function identity<T>(arg: T): T {
  return arg;
}

//화살표함수의 제네릭
const identity01 = <T>(arg0: T) => {};

//타입별칭
type IValuable01<T> = {
  value: T;
};

//제네릭 클래스 구문
class Valuable<T> {
  //오버로드, 생성자함수
  //해당 부분을 생략할 수 있게 -> 접근 제어자(public, private)
  constructor(public value: T) {}
}
