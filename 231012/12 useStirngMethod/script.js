// let userName = prompt("당신의 영문 이름은?");
// let upperName = userName.toUpperCase();
// document.write(upperName, "<br>");

// let userNum = prompt("당신의 전화번호는?", "01012345678");
// let result = userNum.substring(0, userNum.length - 4) + "****";
// document.write(result, "<br>");

let userEmail = prompt("당신의 이메일 주소는?");
let arrUrl = [".com", ".net", ".or.kr", ".go.kr"]; // 이메일로 들어올수있는 형식
let check1 = false;
let check2 = false;

//이메일을 적을 때 @가 0번째 올 수 없으니까
if (userEmail.indexOf("@") > 0) {
  check1 = true;
}

for (let i = 0; i < arrUrl.length; i++) {
  if (userEmail.indexOf(arrUrl[i] > 0)) {
    check2 = true;
  }
}

if (check1 && check2) {
  console.log(userEmail);
} else alert("이메일형식이 잘못되었습니다.");
