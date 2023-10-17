$(".title").click(function () {
  $(this).toggleClass("active");
  $(this).next().toggleClass("active");

  let dataImage = $(this).attr("data-img");
  $(".image img").attr("src", dataImage);
});

// $(".desc").click(function () {
//   $(this).toggleClass("active");
// });
