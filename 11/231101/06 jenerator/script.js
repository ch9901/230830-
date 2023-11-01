//일반적인 함수생성방법
function fnc() {
  console.log(1);
  console.log(2);
  console.log(3);
  console.log(4);
}
fnc();

//제너레이터 함수생성방법
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

let g1 = gen();
console.log(g1);

let g2 = gen();

for (let i of g2) {
  console.log(i);
}

