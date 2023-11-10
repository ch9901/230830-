$(function () {
  $("#inner_1 p:contains(내용1)").css({
    background: "pink",
  });
  $("#inner_1 p:has(strong)").css({
    background: "lavender",
  });
  $("#outer_wrap").contents().css({
    border: "1px dashed dodgerblue",
  });
  $("#inner_2 p").not(":first").css({
    background: "tomato",
  });
  $("#inner_2 p").eq(2).css({
    color: "#fff",
  });
  $("#inner_2 p").eq(2).end().css({
    color:"yellow"
  })
});
