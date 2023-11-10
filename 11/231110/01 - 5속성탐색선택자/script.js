$(function () {
  $("#wrap a[target]").css({
    color: "pink",
  });
  $("#wrap a[href^=https]").css({
    color: "green",
  });
  $("#wrap a[href$=net]").css({
    color: "dodgerblue",
  });
  $("#wrap a[href*=google]").css({
    color: "aqua",
  });
  $("#member_f :text").css({
    background: "pink",
  });
  $("#member_f :password").css({
    background: "purple",
  });
});
