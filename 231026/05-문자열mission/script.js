//사용자가 input 태그에 email값을 입력한다고 가정했을 때, 버튼 클릭 시 해당 이메일의 @문자열을 기준으로 앞에서 3개의 단어를 제외한 나머지 문자까지는 ***처리가 되어서 출력 될 수 있게 하세요

// const userEmail = document.querySelector("#email");
// const btn = document.querySelector("#submit");
// const result = document.querySelector("#result");
// console.log(btn);

// btn.addEventListener("click", (e) => {
//   e.preventDafault();
//   let emailInput = userEmail.value;
//   console.log(emailInput);
//   let a = emailInput.search("@");
//   let resultEmail = emailInput.subString(a, -4);
//   console.log(resultEmail);
//   // result.innerText = "";
// });

/*
선생님 코드

*/

const email = document.querySelector("#email");
const button = document.querySelector("#button");

button.addEventListener("click", (e) => {
  e.preventDefault();
  if (email.value !== "") {
    let userName = email.value.split("@")[0];
    let half = userName.length / 2;

    userName = userName.substring(0, userName.length - half);

    let domain = email.value.split("@")[1];
    result.innerText = `${userName}***@${domain}`;
  }
});
