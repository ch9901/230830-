// const resultNum = document.querySelectorAll(".game-lotto-number span");
// const shotBtn = document.querySelector(".wrapper-lotto-btn");
// console.log(shotBtn);

// let maxNum = 45;
// let lottoNum = 6;

// function lotto() {
//   let myNumber = new Set();
//   for (let i = 0; i <= lottoNum; i++) {
//     myNumber.add(Math.ceil(Math.random() * maxNum));
//     console.log(myNumber);
//     if (myNumber.size === 6) {
//       for (let a = 0; a < resultNum.length; a++) {
//         resultNum[0].innerText = myNumber[0];
//         console.log(myNumber);
//       }
//     } else {
//       resultNum[0].innerText = `숫자가 중복되어 재 추점을 진행합니다.`;
//       for (let b = 1; b < resultNum.length; b++) {
//         resultNum[b].innerText = "";
//       }
//     }
//   }
// }

// shotBtn.addEventListener("click", lotto);

// 1. button을 눌렀을 때 1-45 중복되지않는 수
// 2. button공간 정의
//    >dom : document.querySelector

// 3. button 요소 이벤트 적용
//    >addEventListener

// 4. game lotto num클래스 노드 정의
//    >dom : document.querySelector

// 5. js 내장객체 활용해서 랜덤값 생성
//    >random(), ceil, floor

// 6. 5번 6회 반복
//    >forEach for

// 7. 6번의 출력 값을 담을 공간 필요
//    >배열사용 []

// 8. 랜덤 값 배열의 값이 중복되서는 안된다
//    >set()

// 9. 중복값 생성 시 조건식에 의해서 재 추첨
//    >if/else

const btn = document.querySelector(".wrapper-lotto-btn");
const result = document.querySelector(".game-lotto-number");

const luckynum = {
  digitCount: 6,
  maxNum: 45,
};

const shot = () => {
  //구조분해할당
  let { digitCount, maxNum } = luckynum;
  let myNum = new Set();
  for (let i = 0; i < digitCount; i++) {
    myNum.add(Math.ceil(Math.random() * maxNum));
  }
  if (myNum.size === 6) {
    result.innerText = `${[...myNum]}`;
  } else {
    result.innerText = `숫자가 중복되어 재 추첨하겠습니다.`;
  }
};

btn.addEventListener("click", shot);

//끝말잇기 게임 : A제시어 : 자전"거" B-> 거름/ 거위/ 거
// -> 문자열 / 메서드 : 배열, 인덱스값
//정답, 틀렸습니다.

const startWord = (e) => {
  e.preventDefault();
  let word = document.querySelector("#word").innerText;
  let myword = document.querySelector("#my-word").value;

  //마지막 단어 찾기
  let lastword = word[word.length - 1];

  //입력값의 첫번재 단어찾기
  let firstword = (myword[0]);

  if (lastword === firstword) {
    document.querySelector("#result").innerText = `정답입니다😎`;
    document.querySelector("#word").innerText = myword;
    document.querySelector("#my-word").value = "";
  } else {
    document.querySelector("#result").innerText = `틀렸습니다😈`;
    document.querySelector("#my-word").value = "";
  }
};

const wordbtn = document.querySelector(".search");

wordbtn.addEventListener("click", startWord);


