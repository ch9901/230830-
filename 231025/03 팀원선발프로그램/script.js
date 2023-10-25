// const seed = document.querySelector("#seed");
// const total = document.querySelector("#total");

// const pickBtn = document.querySelector("#raffle");
// const clearBtn = document.querySelector("#clear");

// const resultArea = document.querySelector("#result");
// let clear = () => {
//   seed.value = "";
//   total.value = "";
// };
// clearBtn.addEventListener("click", clear);

// let raffle = (e) => {
//   e.preventDefault();
//   for (let i = 1; i <= total.value; i++) {
//     let num = Math.floor(Math.random() * seed.value) + 1;
//     console.log(num);
//     let resultNum = "";
//     resultNum += num;
//     resultArea.innerText = `${resultNum}번`;
//   }
// };
// pickBtn.addEventListener("click", raffle);

const seed = document.querySelector("#seed");
const total = document.querySelector("#total");

const pickBtn = document.querySelector("#raffle");
const clearBtn = document.querySelector("#clear");

const resultArea = document.querySelector("#result");

pickBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let winner = "";
  for (let i = 0; i <= total.value; i++) {
    let picked = Math.floor(Math.random() * seed.value + 1);
    winner += `${picked}번, `;
  }
  resultArea.innerText = `선발 된 팀원 : ${winner}`;
});
