//매개변수와 인수를 활용해서 1부터 인자값까지의 값을 더하는 함수를 선언, 실행

function sum(a) {
  let resultSum = 0;
  for (let i = 1; i <= a; i++) {
    resultSum += i;
  }
  console.log(`1부터 ${a}값까지의 합은 ${resultSum}입니다`);
}
sum(10);
