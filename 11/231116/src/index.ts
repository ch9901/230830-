//추상화
//추상적인 개념을 무언가의 형태로 시각화

//추상클래스
//생성자 함수를 활용해서 클래스를 만들고자 하는데, 그때 해당클래스에 몸통이 되어지는 요소를 추상적 기법으로 가져와서 클래스를 만드는 것

abstract class AbstractPerson5 {
  abstract name: string;
  constructor(public age?: number) {
    this.age = age;
  }
}
//name key 값 필수 age optional property로 옵션임
//class를 활용해서 프로토타입의 객체를 만드다는 것은 인스턴스 객체를 생성하겠다는 의미임

// const person = new AbstractPerson5();
// -> 추상클래스의 인스턴스를 만들 수 없습니다 : 추상 클래스는 그 자체만으로는 절대 인스턴스 객체를 만들수 없음

//반드시 추상 클래스를 활용 한 별도의 클래스 및 생성자 함수를 통해서만 인스턴스 객체를 만들 수 있음

abstract class Developer {
  abstract coding(): void;
  drink(): void {
    console.log("drink sth");
  }
}

// const test = new Developer();
// 이거 안돼

class FrontEndDeveloper extends Developer {
  coding(): void {
    console.log("develop web");
  }
  design(): void {
    console.log("design web");
  }
}

const josh = new FrontEndDeveloper();
josh.coding();
