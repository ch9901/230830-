const fileZone = document.querySelector(".file-zone");
console.log(fileZone);
const imgPreviewArea = document.querySelector(".image-list");
//file zone 영역에 이미지가 드랍되었다는 사실을 알 수 있도록 이벤트 정의
fileZone.addEventListener("dragover", (e) => {
  e.preventDefault();
});

const displayImgs = (transferedFiles) => {
  const imageFileList = [];
  const fileNumber = transferedFiles.length;
  for (let i = 0; i < fileNumber; i++) {
    if (transferedFiles[i].type.match("image.*") === false) {
      return;
    }
    imageFileList.push(transferedFiles[i]);
  }
  for (let imageFile of imageFileList) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(imageFile);
    fileReader.addEventListener("load", (e) => {
      const image = new Image();
      image.src = e.target.result;
      imgPreviewArea.insertBefore(image, imgPreviewArea.firstChild);
    });
  }
};

fileZone.addEventListener("drop", (e) => {
  e.preventDefault();
  console.log("이미지드랍");
  //특정요소를 활용해서 웹브라우저 안에서 드래그앤드 드랍기능을 사용했을 때, 드랍한 해당 요소의 파일 정보를 읽어내는 이벤트 속성이 존재! -> e.dataTransfer.files
  const transferedFiles = e.dataTransfer.files;
  console.log(transferedFiles);
  displayImgs(transferedFiles);
});
