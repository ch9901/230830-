$(function () {
  $("#wrap p:hidden").css({
    display: "block",
    background: "#ff0",
  });
  let z1 = $("#zone1 :selected").val(); //밸류값을 찾아오는 메서드
  console.log(z1);
  let z2 = $("#zone2 :checked").val();
  console.log(z2);
  let z3 = $("#zone3 :checked").val();
  console.log(z3);
});
