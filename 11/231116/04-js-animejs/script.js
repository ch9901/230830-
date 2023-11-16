// anime.js는 Stagger
//dealy를 보다 효과적으로 사용할수있도록 도와주는 역할

anime({
  targets: ".box1",
  translateX: 250,
  easing: "linear",
  loop: true,
  background: "rgb(255, 0, 85);",
  direction: "alternate",
  borderRadius: 0,
});

anime({
  targets: ".box2",
  translateX: 300,
  translateY: 350,
  duration: 1000,
  loop: true,
  easing: "easeOutElastic",
  direction: "alternate",
  background: "rgb(252, 0, 85)",
  delay: 500,
});

anime({
  targets: ".box3",
  translateX: {
    value: 400,
    duration: 1000,
    delay: 1000,
  },
  rotate: {
    value: 360,
    duration: 3000,
  },
  loop: true,
  direction: "alternate",
  background: "rgb(250, 30, 120);",
  borderRadius: 0,
});
