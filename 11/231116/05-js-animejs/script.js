// anime.js는 Stagger
//dealy를 보다 효과적으로 사용할수있도록 도와주는 역할

const tl = anime.timeline({
  easing: "linear",
  duration: 1000,
});

tl.add({
  targets: ".circle1",
  translateX: 500,
})
  .add({
    targets: ".circle1",
    translateY: 500,
  })
  .add({
    targets: ".circle1",
    translateX: 0,
  })
  .add({
    targets: ".circle1",
    translateY: 0,
  })
  .add({
    targets: ".circle2",
    scale: 1.5,
    borderRadius:0,
    rotate:360,
  });
