let num = 2.1234;
//Math.max -> 매개변수로 들어와있는 인자 값 중 가장 큰 값을 반환 한다
let maxNum = Math.max(10, 5, 8, 30);

//Math.min -> 매개변수로 들어와있는 인자 값 중 가장 작은 값을 반환 한다
let minNum = Math.min(10, 5, 8, 30);

//Math.round -> 매개변수로 들어와있는 숫자의 첫번째 소수점 자리수를 반올림하여 정수로 변환
let roundNum = Math.round(num);

//Math.round -> 매개변수로 들어와있는 숫자의 첫번째 소수점 자리수를 무조건 내림하여 정수로 변환
let floorNum = Math.floor(num);

//Math.round -> 매개변수로 들어와있는 숫자의 첫번째 소수점 자리수를 무조건 올림하여 정수로 변환
let ceilNum = Math.ceil(num);

//Math.random -> 0부터 1 미만의 실수(*소수점을 가지고 있는 숫자)를 난수형태로 반환하는 것
let rndNum = Math.random() * 10;
//뒤에 곱해지는 숫자에 따라 숫자가 커짐 10 -> 1의자리 수 100 -> 10의자리 수

//Math.PI -> 원주율 상수를 반환
let piNum = Math.PI;

// document.write(maxNum, "<br>");
// document.write(minNum, "<br>");
// document.write(roundNum, "<br>");
// document.write(floorNum, "<br>");
// document.write(ceilNum, "<br>");
// document.write(rndNum, "<br>");
// document.write(piNum, "<br>");

//랜덤함수 쓰는 법
//120-150 사이의 정수를 랜덤값으로 추출하고 싶을 때 -> 로또번호 추첨하는 방식
document.write(Math.floor(Math.random() * 31) + 120);
