// const userName = document.querySelector("#userName");
// console.log(`${userName}`.value);
// const major = document.querySelector("#major").value;
// const btns = document.querySelectorAll("input");
// console.log(btns[2]);

// const btn = btns[2];

// const insertPlace = document.querySelector("#attendant");
// console.log(insertPlace.childNodes);
// console.log(insertPlace.childNodes[3]);
// const tb = insertPlace.childNodes[3];
// console.log(tb);
// const tr = tb.childNodes[1];
// console.log(tr);
// btn.addEventListener("click", infoSend);

// function infoSend() {
//   tr.appendChild(`
// <td> ${userName.value}</td>
// <td> ${major.value}</td>`);
//   console.log(infoSend());
// }

// console.log(userName.value);
// // console.log(
// //   tr.appendChild(`
// //   <td> ${userName.value}</td>
// //   <td> ${major.value}</td>`)
// // );

// console.log(`${userName}`.value);

const userName = document.querySelector("#userName");
const major = document.querySelector("#major");
const btn = document.querySelector("form > #btn");

btn.addEventListener("click", (e) => {
  e.preventDefault(); // 기본속성무력화
  let tbody = document.querySelector("#attendant > tbody");
  let newTr = document.createElement("tr");
  let nameTd = document.createElement("td");
  nameTd.innerText = userName.value;
  userName.value = "";

  let majorTd = document.createElement("td");
  console.log(majorTd);
  majorTd.innerText = major.value;
  major.value = "";

  newTr.appendChild(nameTd);
  newTr.appendChild(majorTd);

  tbody.appendChild(newTr);
});
