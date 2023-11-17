const staggerWrap = document.querySelector("ul");
const fragment = document.createDocumentFragment();
const grid = [9, 5];
const col = grid[0];
const row = grid[1];
const allElem = row * col;

for (let i = 0; i < allElem; i++) {
  const li = document.createElement("li");
  fragment.appendChild(li);
}

staggerWrap.appendChild(fragment);

const tl = anime.timeline({
  targets: "ul li",
  delay: anime.stagger(200, { grid: [9, 5], from: "center", axis: "z" }),
  direction: "alternate",
  loop: true,
});

tl.add({
  scale: [
    {
      value: 0.1,
      easing: "easePutSine",
      duration: 500,
    },
  ],
});
