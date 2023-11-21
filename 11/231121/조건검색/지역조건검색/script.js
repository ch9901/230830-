//0. input태그 정의
//0-1. button 태그에 대한 정의

//0-1-1. button태그에 저장 된 속성 값을 알아야한다.
//1. 상단 input태그 안에 입력 된 값을 찾아야한다. (keyup 이벤트요소사용)
//2. input에 입력 된 값과 매칭되는 값을 버튼태그의 속성값을 통해서 찾는다

const searchWordText = document.querySelector("#search-word-input");
const prefectureList = document.querySelectorAll("#prefecture-list button");

const searchStart = () => {
  const searchWord = searchWordText.value;
  // console.log(searchWord);
  prefectureList.forEach((element) => {
    if (!searchWord || searchWord === "") {
      element.classList.remove("hide");
      return;
    }
    const prefectureName = element.dataset.name;
    const phonetic = element.dataset.phonetic;
    // console.log(phonetic);
    // console.log(prefectureName);
    if (
      searchWord.charAt(0) === prefectureName.charAt(0) ||
      searchWord.charAt(0) === phonetic.charAt(0)
    ) {
      element.classList.remove("hide");
    } else {
      element.classList.add("hide");
    }
  });
};
searchWordText.addEventListener("keyup", searchStart);
