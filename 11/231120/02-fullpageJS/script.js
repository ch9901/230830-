const body = document.querySelector("body");
const navBtn = document.querySelector("#nav_icon");
let navOpen = function () {
  body.classList.toggle("nav_active");
};
navBtn.addEventListener("click", navOpen);

const sec2 = () => {
  sec2_title.style.cssText = `
opacity:1;
transform:translateX(50px);`;
  sec2_slider.style.cssText = `
opacity:1;
transform:translateX(-50px);`;
};

const sec2_reset = () => {
  sec2_title.style.cssText = `
opacity:0;
transform:translateX(-50px);`;
  sec2_slider.style.cssText = `
opacity:0;
transform:translateX(50px);`;
};

new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  scrollHorizontally: true,
  navigation: true,
  anchors: ["num0", "num1", "num2", "num3", "num4"],
  afterLoad: (old_elem, new_elem, direction) => {
    if (new_elem.index === 2) {
      console.log("section2 hello");
    }
    if (old_elem.index === 2) {
      console.log("section2 goodbye");
    }
  },
});
