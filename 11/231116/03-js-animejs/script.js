// anime.js는 Stagger
//dealy를 보다 효과적으로 사용할수있도록 도와주는 역할

anime({
  targets: "ul.menu li",
  translateX: 250,
  easing: "linear",
  loop: true,
  direction: "alternate",
  // delay: function (el, i, count) {
  //   return i * 100;
  // },
  delay: anime.stagger(100),
  endDelay: anime.stagger(100),
});
