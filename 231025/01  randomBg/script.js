window.onload = function () {
  const bgcount = 5;
  let randomNum = Math.floor(Math.random() * bgcount) + 1;
  // let randomNum = Math.ceil(Math.random() * bgcount);
  console.log(randomNum);
  document.body.style.backgroundImage = `url(../231025imgs/bg/bg-${randomNum}.jpg)`;
};
