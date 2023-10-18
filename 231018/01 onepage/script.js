// $(element).scrollTo(target[,duration][,settings]);
$("nav a").click(function (i) {
  $.scrollTo(this.hash || 0, 1000);
  i.preventDefault();
});
