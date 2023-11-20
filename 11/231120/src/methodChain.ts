//접근제어자, 접근제어문 : class 생성자를 사용할 때, 해당 클래스의 속성값을 임의로 수정하지 못하도록 하기 우해서 생성자 함수 안에 할당 된 인자값에private이라는 접근제어자를 설정해줬음. 나중에 생성자 함수의 인자값을 수정할 수 있도록 설정하려면 public 이라는 접근제어자를 설정했었음.
//해당 접근 제어자를 사용하면 class 생성자를 만들 때, 반드시 기입해야하는 오버로드 내용을 생략 할 수 있다.

export type NumToNumFunc = (arg0: number) => number;

export const add = (a: number): NumToNumFunc => {
  const _add = (b: number): number => {
    return a + b;
  };
  return _add;
};



export class calculator {
  constructor(public value: number = 0) {
    add(value){
this.value*=value;
}
return this
  }
}
