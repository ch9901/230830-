$(".btn li").click(function () {
  $(this).addClass("active");
  $(this).sibilings().removeClass("active");

  let result = $(this).attr("data-alt");
  $(".tabs div").removeClass("active");
  $("#" + result).addClass("active");
});
