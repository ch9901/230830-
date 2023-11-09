$(function () {
  // $("li:first-of-type").css({
  //   background: "#ff0",
  // });
  // $("li:last-of-type").css({
  //   background: "#f0f",
  // });

  // $("#menu01 li:nth-child(1)").css({
  //   background: "#ff0",
  // });

  // $("#menu01 li:nth-child(2n)").css({
  //   border: "4px dashed dodgerblue",
  // });

  // $("#menu02 li:nth-last-child(2)").css({
  //   background: "yellowgreen",
  // });

  $("#menu01 li").slice(1, 3).css({
    background: "#ff0",
  });
  $("li:only-child").css({
    background: "#0ff",
  });
});
