// 1. 사용자가 입력하는 원가격정의
// 2. 사용자가 입력하는 할인률 정의
// 3. 출력되는 문구 위치 정의
// 4. 버튼클릭시 이벤트기능정의

function showPrice() {
  let originPrice = document.querySelector("#oPrice").value;
  console.log(originPrice);
  let rate = document.querySelector("#rate").value;
  console.log(rate);
  let savedPrice = originPrice * (rate / 100);
  let resultPrice = originPrice - savedPrice;
  console.log(savedPrice);
  console.log(resultPrice);
  document.querySelector(
    "#showResult"
  ).innerHTML = `상품의 원래 가격은 ${originPrice}원이고, 할인율은 ${rate}% 입니다. ${savedPrice}원을 절약한 ${resultPrice}에 구매 할 수 있습니다.`;
}
