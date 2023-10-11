// 교통비, 식비, 음료비 3개 받기
// 3개의 합이 10000원 초과 시 초과 한 금액, 돈을 조금 아껴 써 주세요 미만인 경우 잔여금액, 돈 관리 잘 하셨어요 웹 브라우저 화면에 출력

let train = parseInt(prompt("사용하신 교통비를 입력해주세요"));
let eat = parseInt(prompt("사용하신 식비를 입력해주세요"));
let drink = parseInt(prompt("사용하신 음료 값을 입력해주세요"));
let total = train + eat + drink;

// let i = 10000 - total;
// console.log(i);
// let result = i > 0 || i < 10000;

// result = result ? "돈 관리 잘 하셨어요 " : "초과하셨어요";
// document.write(result);

let result = total < 10000;
let result1 = 10000 - total;
let result2 = total - 10000;
result = result
  ? `${result1}원 남았어요 돈 관리 잘 하셨어요`
  : `${result2}원 초과했어요 조금만 더 노력해주세요`;

document.write(result);
