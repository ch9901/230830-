$(function () {
  $("h2").css({
    background: "pink",
  });

  let result_1 = $("inner_1 p").eq(0).is(":visible");
  console.log(result_1);

  let result_3 = $("#ck1").is(":checked");
  console.log(result_3);

  let result_4 = $("#ck2").is(":checked");
  console.log(result_3);
});
