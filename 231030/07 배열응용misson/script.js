// 1. 사용자로부터 영문 소문자로 구성 된 임의의 문자열을 받기
// 2. 사용자로부터 받은 문자열의 첫번째 단어만 대문자로 출력하게하고, 나머지 문자는 소문자로 출력하게 해주세요

// let str = prompt(`소문자로 구성 된 문자열을 입력해주세요`);

// let str1 = str[0].toUpperCase();
// console.log(str1);

// document.write(
//   `입력하신 소문자로 구성 된 문자열은 ${str}입니다.<br> 해당 문자열의 맨 앞문자만 대문자로 변경 한 문자는 ${str[0].toUpperCase()}${str.slice(
//     1,
//     str.length
//   )}입니다.`
// );

//선생님코드
const string = prompt(`영문 소문자로 된 문자열을 입력하세요`);
const firstCh = string[0].toUpperCase();
const remainCh = string.slice(1);
const result = firstCh + remainCh;

const result01 = [string[0].toUpperCase, ...string.slice(1)].join("");

console.log(result01);
document.write(result);

//js 공부하는 학습방법
//js문법 > js활용하는 방법
