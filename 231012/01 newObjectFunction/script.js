//객체 : 자료를 저장하고 처리하는 기본 단위
let shoeDog = {
  author: "phil knight",
  category: "social",
  pages: 500,
  price: 19800,
};

//객체를 생성하는 방법
// 1. 함수형 생성방법(* 내장함수)
// tv라는 변수가 객체가 될수있게끔 자격요건을 부여한것
let tv = new Object();

tv.color = "white";
tv.price = 300000;
tv.info = function () {
  document.write(`tv 색상 : ${tv.color} </br>`);
  document.write(`tv 가격 : ${tv.price} </br>`);
};
document.write(`<h1>tv 객체 메서드 호출</h1>`);
tv.info();

//2. 속성설정방법

let car = {
  color: "black",
  price: 5000000,
  info: function () {
    document.write(`car color : ${car.color} </br>`);
    document.write(`car price : ${car.price} </br>`);
  },
};
document.write(`<h1>car 객체 메서드 호출</h1>`);
car.info();
