/*//배열, 반복문 -> 프로그래밍 언어의 근간 : 중추역할
//배열은 다른요소보다 "메서드 혹은 속성"이 많음

let vegetable = ["양상추", "토마토", "피클"];
let meat = ["불고기"];

//서로 다른배열을 가진 배열을 합치고 싶을 때
//let 변수명 = 배열명.concat(합치고싶은 배열을가진 변수명, "추가하고싶은 배열")
let meatBurger = vegetable.concat(meat, "빵");
console.log(meatBurger);

*/

//전개연산자 == 스프레드연산자
let vegetable = ["양상추", "토마토", "피클"];
let cheese = ["모짜렐라", "슈레드"];

let cheeseBurger = ["빵", ...vegetable, ...cheese];
console.log(cheeseBurger);

//배열요소를 정렬하는 메서드
let numbers = [6, 9, 3, 21, 18];
//reverse : 배열요소를 거꾸로 출력
console.log(numbers.reverse());

// 크기에 따라서 정렬하여 출력
let week = ["sun", "mon", "tues"];
let values = [5, 20, 3, 11, 4, 15];

//맨 앞자리가 작은 순부터 출력
console.log(values.sort());

//맨 앞자리 기준으로 abc순으로 출력
console.log(week.sort());

//완전 숫자 순대로 출력하고싶을 때
values.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1; // 인덱스 값에 -1을 해라 라는뜻임 ..
  if (a === 0) return 0;
});
console.log(values);

//위를 축약형으로 쓴 것
values.sort((a, b) => {
  return a - b;
});
console.log(values);