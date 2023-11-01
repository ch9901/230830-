//상담신청과목 리스트를 하단 최종신청 과목 영역에 출력되도록 해주세요
//단, 각 멤버들이 중복해서 신청한 값이 존재한다면, 한번만 출력되도록 설정

// const result = document.querySelector("#result");
// let member01 = new Set();
// member01.add("HTML").add("CSS");
// console.log(member01);

// let member02 = new Set();
// member01.add("Javascript").add("CSS");
// console.log(member01);
// let member03 = new Set();
// member01.add("Javascript").add("Typescript");
// console.log(member01);

// let object = [...member01, ...member02, ...member03];
// console.log(object);

// result.innerHTML = object;

//선생님코드
const member1 = ["HTML", "CSS"];
const member2 = ["CSS", "Javascript"];
const member3 = ["Javascript", "Typescript"];

const resultArea = document.querySelector("#result");

const subjects = [...member1, ...member2, ...member3];
let resultList = new Set();

subjects.forEach((subject) => {
  resultList.add(subject);
});
console.log(resultList);
resultArea.innerHTML = `
<ul>
${[...resultList].map((subject) => `<li>${subject}</li>`).join("")}
</ul>`;
