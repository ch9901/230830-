//배열의 변칙성 메서드
//배열 메서드 slice, splice -> 규칙성
//배열자체의 속성을 변경
// map(), filter(), reduce()

let numbers = [1, 2, 3, 4, 5];
//Q. numbers 라는 배열 안에 있는 모든 아이템에 곱하기 2를해서 신규배열을 만들어보세요

let newNumbers = numbers.map((number) => number * 2);

console.log(numbers);
console.log(newNumbers);

let newNumbers2 = numbers.map((number, index) => index + number * 3);

console.log(newNumbers2);
