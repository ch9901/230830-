const items = document.querySelectorAll("article");
const aside = document.querySelector("aside");
// console.log(items)
const close = aside.querySelector("span");

for (let el of items) {
  el.addEventListener("mouseenter", (e) => {
    e.currentTarget.querySelector("video").play();
  });
}
for (let el of items) {
  el.addEventListener("mouseleave", (e) => {
    e.currentTarget.querySelector("video").pause();
  });
  el.addEventListener("click", (e) => {
    let tit = e.currentTarget.querySelector("h2").innerText;
    let txt = e.currentTarget.querySelector("p").innerText;
    let vidSrc = e.currentTarget.querySelector("video").getAttribute("src");
    console.log(vidSrc);
    // console.log(tit);
    aside.querySelector("h1").innerText = tit;
    aside.querySelector("p").innerText = txt;
    aside.querySelector("video").setAttribute("src", vidSrc);

    aside.classList.add("on");
    aside.querySelector("video").play();

    close.addEventListener("click", () => {
      aside.classList.remove("on");
      aside.querySelector("video").pause();
    });
  });
}
