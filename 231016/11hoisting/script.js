let count = 0;

//함수가 선언되지않았는데 선 호출됐음에도 실행이 가능 .. -> 호이스팅
myFnc();

//화살표함수를 썼을 때는 호이스팅 불가능
theFnc();

function myFnc() {
  count++;
  document.write(`hello ${count} <br/>`);
}
myFnc();

//새로운 함수 선언**화살표함수로
let theFnc = () => {
  count++;
  document.write(`bye ${count}<br/>`);
};

theFnc();
