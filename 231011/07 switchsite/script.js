let site = prompt("네이버, 다음, 구글 중 즐겨사용하는 포털사이트는?");

let url;

if (site !== null && site !== "") {
  switch (site) {
    case "구글":
      url = "https://www.google.com";
      break;
    case "다음":
      url = "https://www.daum.net";
      break;
    case "네이버":
      url = "https://www.naver.com";
      break;
    default:
      alert("보기중에 없는 사이트입니다");
  }
}
if (url) {
  location.href = url;
}
