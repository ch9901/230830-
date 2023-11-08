const btn = document.querySelector(".button");

const changeColor = () => {
  let rec = document.querySelector(".rectangle");
  let r = Math.ceil(Math.random() * 255);
  let g = Math.ceil(Math.random() * 255);
  let b = Math.ceil(Math.random() * 255);
  rec.style.background = `rgb(${r},${g},${b})`;
};

btn.addEventListener("click", changeColor);
