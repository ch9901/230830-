// random이라는 함수 선언 그 안에 매개체(코인){ 값을 반환할거야 수학연산작업내장개체.floor함수(소수점 첫번째거를 버려라)(숫자0-1미만의 실수 * 내가 받은 매개체)}
function random(number) {
  return Math.floor(Math.random() * number);
}
function bgChange() {
  const rndCol =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  document.body.style.backgroundColor = rndCol;
}
// 함수호출(실행시켜줘)
bgChange();

