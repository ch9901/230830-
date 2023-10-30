// let season = []; // 빈 배열을 할당했다
// //배열에 인덱스를 넣는 방법 -1
// season[0] = "spring";
// season[1] = "summer";
// console.log(season);

// //실무에서 가장 많이 쓰는 방법 -2
// let pets = ["dog", "cat", "parrot"];
// console.log(pets);

// //내장객체를 사용하여 배열을 만드는 방법-3
// let fruits = new Array("사과", "복숭아", "포도");
// console.log(fruits);

// let pets = ["dog", "cat", "parrot"];
// console.log(pets[1]);

// let fruits = new Array("사과", "복숭아", "포도");
// fruits[4] = "배";
// console.log(fruits);

let colors = ["red", "blue", "black", "white", "green"];
//for문을 돌리지 않는 다면
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
console.log(colors[3]);
console.log(colors[4]);

// class repeatArr {
//   constructor() {}
// }
//for문을 돌려서 해결
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

//변칙성의 for 메서드(함수)
//forEach는 콜백함수임 forEach는 반드시 본인의 객체요소의 각각의 아이템을 매개변수로 받는 콜백함수로밖에 못쓴다.
//forEach > 매개변수 혹은 인자값이 1개인 경우
let animals = ["lion", "bear", "bird"];
animals.forEach((animal) => {
  console.log(animal);
});
//animals라는 배열에 forEach라는 메서드(함수)를 활용해서 animal(사용자가 명명하는 변수명)이라는 배열에 이름을 지어준거임~!

//매개변수 혹은 인자값이 2개인 경우 forEach를 못쓰나요? ㄴㄴ가능
animals.forEach((animal, index) => {
  console.log(`animals[${index}] : ${animal}`);
});

//매개변수 혹은 인자값이 3개인경우 배열안에것을 그대로 불러오는게 세번째 매개변수
animals.forEach((animal, index, array) => {
  console.log(`[${array}] [${index}] : ${animal}`);
});

// forEach(배열에 할당 된 값, 인덱스 값, 배열안의 것들을 그대로 불러옴)