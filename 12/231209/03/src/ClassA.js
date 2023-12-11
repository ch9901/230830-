class Student {
  //field :
  name;
  grade;
  age;

  //method
  study() {
    console.log("열공");
  }

  introduce() {
    console.log("하이요");
  }
  //constructure
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }
}

const studentA = new Student("david", "a+", 20);
//studentA >> 인스턴스객체 -> 클래스 생성자를 통해서 탄생한 일종의 붕어빵
//Student 클래스 생성자 : 붕어빵 틀
//new Student : 프로토타입 함수
//new Student를 통해서 만들어지는 객체 >> 프로토타입 객체

//상속
class StuentDeveloper extends Student {
  //field
  favoriteSkill;
  //constructure
  constructor(name, grade, age, favoriteSkil) {
    super(name, grade, age);
    this.name, this.grade, this.age, this.favoriteSkil;
  }
  //method
  progamming() {
    console.log(`${this.favoriteSkil}로 프로그래밍 함`);
  }
}

const studentB = new StuentDeveloper("ava", "A-", 25, "javascript");
console.log(studentB);

//접근제어자를 사용하면 field 값을 사용하지않고 생략해도 된다 !! > this를 활용 한 객체의 키 값 정의도 생략이 가능하다.
class StuentDeveloper2 extends Student {
  //constructure
  constructor(name, grade, age, favoriteSkil) {
    super(name, grade, age);
    name, grade, age, favoriteSkil;
  }
  //method
  progamming() {
    console.log(`${this.favoriteSkil}로 프로그래밍 함`);
  }
}
