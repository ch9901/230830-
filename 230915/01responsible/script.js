jQuery(function ($) {
  $(".trigger").click(function () {
    $(".gnb").stop().slideToggle("fast");
  });
});

$(".trigger").click(function () {
  $(this).toggleClass("active");
  $(".gnb, .sns").toggleClass("on");
});
