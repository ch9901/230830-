//로또생성기를 result공간에 Set을 활용하여 출력하세요
// 로또 성립조건
//1. 정수 1부터 45까지의 숫자만 허용
//2. 허용 된 숫자 중 중복되지 않는 총 6개의 숫자만 추첨
//3. 언제 추첨 될 숫자가 생성되어야 하는가?  => 버튼을 눌렀을때
//4. 어디에 출력되어야하는가? => result

// const resultArea = document.querySelector("#result");
// const btn = document.querySelector("button");
// let lottoNum = new Set();
// let Num;
// btn.addEventListener("click", shot());

// function shot() {
//   for (let i = 0; i < 6; i++) {
//     let randomNum = Math.floor(Math.random() * 45) + 1;
//     lottoNum.add(randomNum);
//   }
// }

// function printNum() {
//   for (let Num of lottoNum) {
//     console.log(Num);
//   }
//   return Num;
// }

//선생님코드
const button = document.querySelector("button");
const result = document.querySelector("#result");

//구조분해할당으로 변수 선언
const luckNum = {
  digitCount: 6,
  maxNum: 45,
};

button.addEventListener("click", (e) => {
  e.preventDefault();
  //구조분해할당
  let { digitCount, maxNum } = luckNum;
  let myNumber = new Set();
  for (let i = 0; i < digitCount; i++) {
    myNumber.add(Math.floor(Math.random() * maxNum) + 1);
  }
  if (myNumber.size === 6) {
    result.innerText = `${[...myNumber]}`;
  } else {
    result.innerText = `숫자가 중복되어 재 추첨을 진행하겠습니다.`;
  }
});
