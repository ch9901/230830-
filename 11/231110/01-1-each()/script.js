$(function () {
  let obj = [{ area: "서울" }, { area: "부산" }, { area: "전주" }];

  $(obj).each(function (i, o) {
    console.log(i + ":", o);
  });

  $.each($("#menu02 li"), function (i, o) {
    console.log(i + ":", o);
  });
});
