//길이가 다른 abc의 막대길이로 삼각형을 만들수있으면 yes 없으면 no출력
//삼각형의 조건 : 두 변의 합이 가장 큰 변의 값보다 작으면 될수없음

let a = parseInt(prompt(`첫번째 길이를 입력하세요`));
let b = parseInt(prompt(`두번째 길이를 입력하세요`));
let c = parseInt(prompt(`세번째 길이를 입력하세요`));
let max;
if (a > b) {
  max = a;
} else {
  max = b;
}
if (max < c) {
  max = c;
}

tri = () => {
  if (a + b < max) {
    alert(`no`);
  }
};
