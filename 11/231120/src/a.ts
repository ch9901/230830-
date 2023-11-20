//class 생성자를 언제 왜 사용하는가?
//-> js에서 반복적으로 사용 할 객체를 정의하고자 할 때 사용함

export class A {
  value: number = 1;
  method: () => void = function (): void {
    console.log(`value:${this.value}`);
  };
}

//this/class 생성자 사용목적 /class생성자를 정의한 이후에 어떻게 사용할수있는지 프로토타입함수, 프로토타입객체, 인스턴스 객체

