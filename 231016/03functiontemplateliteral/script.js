let num = parseInt(prompt("몇 까지 더할까요?"));

function calcSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}


//return안썼을 때 1부터 10까지 더하면 undefined
// document.write(`1부터 ${num}까지 더하면 ${calcSum(num)} `);

document.write(`1부터 ${num}까지 더하면 ${calcSum(num)} `);