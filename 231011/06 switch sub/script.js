let subject = prompt(`신청 할 과목을 선택하세요`, "1-HTML, 2-CSS, 3-JS");

if (subject !== null && subject !== "") {
  switch (subject) {
    case "1":
      document.write("HTML을 신청했습니다");
      break;
    case "2":
      document.write("CSS를 신청했습니다");
      break;
    case "3":
      document.write("JS를 신청했습니다.");
      break;
    default:
      document.write("잘못입력했습니다 다시 입력해주세요");
  }
} else {
  alert(`정상적인 과목을 선택해주세요`);
}
