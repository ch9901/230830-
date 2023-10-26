//문자열 & 배열
/*
1. 사용자로부터 특정 문자열을 받아라 "가나다라마바사"
2. 사용자로부터 특정 문자열안에 속해있는 특정 단어를 받아라 " 가"
3. 해당 문자열에서 특정 단어가 몇번반복되었는지 알려주는 알림창만들기
*/

// let str = prompt(`"가" 단어가 속해져있는 문장을 입력하세요`);
// let result = 0;
// for (let i = 1; i <= str.length; i++) {
//   if (str.match("가")) {
//     result += 1;
//   }
// }
// alert(`입력하신 문자에 "가"는 ${result}번 들어있습니다.`);
// console.log(str.length);

// 선생님코드
const string = prompt(`문자열을 입력하세용`);
const letter = prompt(`어떤 문자를 체크하시겠습니까?`);

let counting = (str, ch) => {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (str[i] === ch) {
      count += 1;
    }
  }
  return count;
};
const result = counting(string, letter);
alert(`"${string}" 문장에 "${letter}" 가 ${result}개 있습니다.`);
