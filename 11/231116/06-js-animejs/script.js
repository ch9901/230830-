// anime.js는 Stagger
//dealy를 보다 효과적으로 사용할수있도록 도와주는 역할

anime({
  targets: "ul li",
  translateY: function (el, i) {
    if (i % 2 == 0) {
      return 80;
    } else {
      return -80;
    }
  },
  delay: anime.stagger(300),
  easing: "linear",
  duration: 1000,
  opacity: 1,
  loop: true,
  direction: "alternate",
});
