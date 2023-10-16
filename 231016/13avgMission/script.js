//국어 수학 점수 받아서 평균점수 출력하는 함수 선언 ,실행

// let korScore = parseInt(prompt(`국어점수를 입력해주세요`));
// let mathScore = parseInt(prompt(`수학점수를 입력해주세요`));

// function avg(a, b) {
//   let avgResult = (a + b) / 2;
//   document.write(
//     `당신의 국어점수 ${a}점,수학점수 ${b}점의 평균은 ${avgResult}입니다.`
//   );
// }
// avg(korScore, mathScore);

//선생님코드
let arrSubject = ["국어", "수학"];

function testAvg(arrData) {
  let sum = 0;
  for (let i = 0; i < arrData.length; i++) {
    sum += parseInt(prompt(arrData[i] + "점수를 알려주세요"));
  }
  let avg = sum / arrData.length;
  return avg;
}

let result = testAvg(arrSubject);

document.write(`두 과목의 평균점수는 ${result}입니다`);
