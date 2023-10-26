//pet이라는 이름의 클래스를 만들고 하나의 인스턴스객체를 만들기 pet name color 프로퍼티를 갖고 run()이라는 메서드 갖기run()이라는 메서는 반려동물의 name속성값과 함께 isrunning이라는 문자열을 알림창에 표시할수있도록 정의

// class Pet {
//   constructor(pname, color) {
//     this.pname = pname;
//     this.color = color;
//   }
//   run() {
//     alert(`강아지의 이름은 ${this.name}이고 털의 색상은 ${color}입니다`);
//   }
// }
// const pet1 = new Pet("쿠키", "흰색");
// pet1.run();

// 선생님코드
// class Pet {
//   constructor(name, color) {
//     this.name = name;
//     this.color = color;
//   }
//   run() {
//     alert(`${this.name} is running`);
//   }
// }
// const cheez = new Pet("치즈", "yellow");
// cheez.run();

//pet을 상속받는 cat이라는 클래스를 만들고 cat이라는 클래스는 고양이의 품종을 의미하는 breed라는 프로퍼티를 추가하고 고양이의 이름과 색상 품종을한번에 표시 할 수 있는 viewinfo라는 메서드 추가하기 cat class 를 활용해서 인스턴스 객체를 만들고 viewinfo실행시키기

class Pet {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  run() {
    alert(`${this.name} is running`);
  }
}
const cheez = new Pet("치즈", "yellow");

class Cat extends Pet {
  constructor(name, color, breed) {
    super(name, color);
    this.breed = breed;
  }
  viewInfo() {
    alert(`${this.name}은 ${this.color}색상의 품종은 ${this.breed}입니다`);
  }
}

const kuki = new Cat("쿠키", "white", "샴고양이");
kuki.viewInfo();
