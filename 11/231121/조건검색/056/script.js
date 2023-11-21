const userDataList = [
  { id: 123, name: "아이유" },
  { id: 456, name: "태연" },
  { id: 789, name: "백예린" },
];
const searchResult = document.querySelector("#search-result");
const searchId = document.querySelector("#search-id-input");

//내 코드
// const searchStart = () => {
//   const searchThing = Number(searchId.value);
//   console.log(searchThing);
//   userDataList.forEach((data) => {
//     if (data.id === searchThing) {
//       searchResult.innerText = data.name;
//     }
//   });
// };

//선생님코드
searchId.addEventListener("keyup", searchStart);

const findUser = (searchId) => {
  const targetData = userDataList.find((data) => data.id === searchId);
  if (targetData === null) {
    searchResult.innerText = "유저 검색 결과 없음";
  }
  searchResult.innerText = targetData.name;
};

searchId.addEventListener("keyup", (e) => {
  const searchId = Number(e.target.value);
  findUser(searchId);
});
