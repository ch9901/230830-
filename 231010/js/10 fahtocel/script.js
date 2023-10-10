// 내 code
// let origin = parseFloat(prompt("화씨온도를 입력해주세요"));
// let result = (origin - 32) / 1.8;

// alert(`화씨 ${origin}도는 섭씨 ${result}입니다`);

// html했는데 실패햇오
// function click() {
//   let origindeg = parseFloat(document.querySelector("#origin").value);

//   let result1 = (origindeg - 32) / 1.8;

//   alert(`화씨 ${origindeg}도는 섭씨 ${result1}입니다`);
// }

// 선생님 codereview
let fah = parseFloat(prompt("화씨온도를 입력해주세요"));
let cel = ((fah - 32) / 1.8).toFixed(2);

alert(`화씨 ${fah}도는 섭씨 ${cel}도입니다.`);
// 특정소수점까지 보이게하는방법
// (원하는 수식).toFixed(원하는자리수)
