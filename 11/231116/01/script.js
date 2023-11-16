const major = document.querySelector("#major");
console.log(major.options);
const displaySelect = () => {
  let selectedText = major.options[major.selectedIndex].innerText;
  alert(`선택 된 학과는 ${selectedText}입니다`);
};

major.addEventListener("change", displaySelect);
