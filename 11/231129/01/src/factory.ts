// type test={name:string}

// const create = <T>(type: T): T => new type();

//제네릭 타입변수의 남발로인한 "타입의 타입"과 같은 부작용을 사전에 방지하기 위해서 타입제약이 나타났다.
// const create = <T extends{new():T}>(type: T): T => new type();

//new라는 예약어를 사용해서 class 생성자를 통한 프로토타입의 객체와 인스턴스타입의 객체를 생성하고자 할 때, 만약 인자값을 전달 해야하는 상황이 발생한다면?
export const create = <T>(type: { new (...args:any): T }, ...args: any): T =>
  new type(...args);
