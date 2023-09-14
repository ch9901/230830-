jQuery(function ($) {
  $(".rightgnb").click(function () {
    $(".leftgnb").stop().slideToggle("fast");
  });
});
