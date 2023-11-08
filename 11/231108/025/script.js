const character = document.querySelector(".character");

let degree = 0;

let loop = () => {
  const rotation = (degree * Math.PI) / 180;

  const targetX = window.innerWidth / 2 + 100 * Math.cos(rotation);
  const targetY = window.innerHeight / 2 + 100 * Math.sin(rotation);

  character.style.top = `${targetY}px`;
  character.style.left = `${targetX}px`;

  degree += 1;
  requestAnimationFrame(loop);
};

loop();
