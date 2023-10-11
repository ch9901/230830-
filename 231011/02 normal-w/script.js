// <!-- 몸무게를 입력받아 과체중, 저체중인지 출력해주기 -->
let name = prompt("이름을 입력해주세요!😊", "ex) 홍길동");
let height = parseInt(prompt("키를 입력해주세요!😁", "ex) 180"));
let weight = parseInt(prompt("현재 몸무게를 입력해주세요!😊", "ex) 70"));

let normal_w = (height - 100) * 0.9;
let result = weight >= normal_w - 5 && weight <= normal_w + 5;
// 결과 값 true, false로 반환
result = result ? "적정체중이시네요! 😎" : "적정체중이아닙니다. 😢";
document.write(`${name}님은 ${result}`);
