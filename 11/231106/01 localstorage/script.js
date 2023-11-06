let students = ["kim", "lee", "park"];
// console.log(`현재 students는 ${students}`);

localStorage.setItem("students", JSON.stringify(students));

let localData;
if (localStorage.getItem("students") === null) {
  localData = [];
} else {
  localData = JSON.parse(localStorage.getItem("students"));
}

console.log(localData);

localData.push("Choi");
console.log(`추가 후 students는 ${localData}`);

localStorage.setItem("students", JSON.stringify(localData));

const indexOfValue = localData.indexOf("lee");
console.log(indexOfValue);
localData.splice(indexOfValue, 1);
console.log(`삭제 후 students 값은 ${localData}`);
localStorage.setItem("students", JSON.stringify(localData));

//localstorage의 특정 값을 날리고싶다
localStorage.removeItem("students");
