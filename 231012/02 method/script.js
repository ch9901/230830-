//this 객체 -> method(메서드):함수형태종류 중 하나
// 객체안에 key 를 선언하고 거기에 함수를 집어넣는다면 그것을 메서드 라고 부름

//재활용이 가능한 객체 및 메서드(값을 고칠 수 있음)
let test = {
  avg: function (math, science) {
    return math + science;
  },
};

//document라는 객체안에 write()라는 함수 메서드!
document.write(test.avg(50, 100));


//재활용이 불가능한 객체 및 메서드(값을 못고치니까) 
// -> 치명적인 오류가있음!
// 하나의 오타라도 나게된다면 해당 문 실행 XXXX -> 이걸 해결하기 위해 this 사용
let test01 = {
  math: 50,
  science: 100,
  avg: function () {
    return test01.math + test01.science;
  },
};
//document라는 객체안에 write()라는 함수 메서드!
document.write(test01.avg());

//this 사용 : 현재 함수에 할당되어있는 (this.key) key를 불러옴! -> 일부 재활용 가능 ** 화살표함수에서는 this객체가 안먹힘 .. 이유xxx
let cloud = {
  math: 50,
  science: 100,
  avg: function () {
    return this.math + this.science;
  },
};
//document라는 객체안에 write()라는 함수 메서드!
document.write(cloud.avg());
// 함수 안에 들어갈 수 => avg(인자값(인수값)이라고 부름)
