$(function () {
  // $("#menu li:first").css({
  //   background: "yellow",
  // });
  // $("#menu li:last").css({
  //   background: "blue",
  // });
  // $("#menu li:even").css({
  //   background: "#ff0",
  // });
  // $("#menu li:odd").css({
  //   background: "#0ff",
  // });
  $("#menu li").eq(2).css({
    background: "#ff0",
  });

  $("#menu li:lt(2)").css({
    background: "aqua",
  });
  $("#menu li:gt(2)").css({
    background: "#f0f",
  });
});
