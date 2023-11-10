$(function () {
  let result_1 = $("#sec_1").html();
  console.log(result_1);
  $("#sec_1 p").html('<a href="https://www.naver.com">하이요</a>');
  console.log(result_1);

  let result_2 = $("#sec_2").text();
  console.log(result_2);
  $("#sec_2 h2").text("하이");
});
