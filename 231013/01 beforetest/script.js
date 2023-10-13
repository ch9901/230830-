$(".testimonial-pic img").click(function () {
  $(this).addClass("active");
  $(this).siblings().removeClass("active");
  $(".testimonoal .content").removeClass("active");
  $("#" + $(this).attr("data-alt")).addClass("active");
});
