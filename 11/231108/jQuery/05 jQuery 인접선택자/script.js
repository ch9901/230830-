$(function () {
  $("#list-1").parent().css("border", "2px dashed #f00");
  $("#wrap > li").css("color", "#1afbdc");
});

// $(function () {
//   $("#wrap > h1").css("border", "2px dashed #f00");
//   $("#wrap > section").children().css({
//     background: "lavender",
//     color: "#555",
//     border: "1px solid #555",
//   });
// });

// $(function () {
//   let style_1 = {
//     background: "lavender",
//     border: "2px dashed #555",
//   };
//   let style_2 = {
//     background: "dodgerblue",
//     border: "5px dashed #fff",
//   };
//   $(".txt").prev().css(style_1);
//   $(".txt+p").css(style_2);
//   $(".txt").next().next().css(style_2);
// });

$(function () {
  let style_1 = {
    background: "lavender",
    border: "2px dashed #555",
  };
  let style_2 = {
    background: "dodgerblue",
    border: "5px dashed #fff",
  };
  // $(".txt").prevAll().css(style_1);
  // $(".txt").nextAll().css(style_2);
  $(".txt").siblings().css(style_2);
});
