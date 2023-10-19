let counter = 0;
let timer = setInterval(() => {
  console.log("hi");
  counter++;
  if (counter === 5) {
    clearInterval(timer);
  }
}, 2000);

// setInterval(실행문,실행간격밀리초)
function greeting() {
  console.log("안녕하세용");
}
setInterval(greeting(), 2000);

setInterval(() => {
  console.log("안녕하세용");
}, 2000);

//clearInterval interval 종료
let counter = 0;

// settimeout()
// 일정시간이 지난 후에 실행하게하는 함수
setTimeout(() => {
  console.log("");
}, 3000);
