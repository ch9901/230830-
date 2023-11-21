// const container = document.querySelector(".container");
// const div = document.createElement("div");
// const h2 = document.createElement("h2");
// const p = document.createElement("p");

// let nameArr = ["곰", "여우", "사자"];
// let areaArr = ["서울", "대전", "부산"];

// let string = "";

// for (let i = 0; i < 3; i++) {
//   container.appendChild(div).classList.add("card");
//   div.appendChild(h2);
//   h2.appendChild(p);
//   h2.innerText = nameArr[i];
//   p.innerText = `지역:${areaArr[i]}`;
//   console.log(div.innerHTML);
// }

// h2.innerText = "곰";
// p.innerText = "지역 : 서울";

// div.appendChild(h2);
// h2.appendChild(p);
// container.appendChild(div).classList.add("card");

const container = document.querySelector(".container");

const userList = [
  { id: 1, name: "곰", address: "서울" },
  { id: 2, name: "여우", address: "대전" },
  { id: 3, name: "사자", address: "부산" },
];

userList.forEach((userData) => {
  container.innerHTML += `
  <div class="card">
  <h2>${userData.name}</h2>
  <p>지역 : ${userData.address}</p>
  </div>
  `;
});
