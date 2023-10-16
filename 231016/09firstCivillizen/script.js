//callback 예시
//왜 callback함수를 써야하는가?
// single thread => 1차선 : 한번의 실행문만 실행시킴

// function showData(name, age){
//   alert(`안녕하세요 ${name}님 나이가 ${age}살이군용`)
// }

// function getData(callback) {
//   let userName = prompt(`이름을 입력하세요`);
//   let userAge = parseInt(prompt(`나이를 입력하세요`));
//   callback(userName, userAge);
// }

// getData(showData);

let sum = (a, b) => a + b;

console.log(sum(1, 4));

function hello() {
  return `안녕하세용`;
}

function bye() {
  return `빠잉`;
}

function userCheck(name, fn) {
  console.log(`${name}님`, fn());
}

userCheck(`홍길동`, hello);
userCheck(`도레미`, bye);

//고차함수
let init = () => {
  return function (a, b) {
    return a - b > 0 ? a - b : b - a;
  };
};

//즉시실행함수
console.log(`init(30,20):${init()(30, 20)}`);
