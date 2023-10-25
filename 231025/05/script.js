const btn = document.querySelector("#btn");
const result = document.querySelector("#result");

class Cylinder {
  constructor(cylinderDiameter, cylinderHeight) {
    this.diameter = cylinderDiameter;
    this.height = cylinderHeight;
  }
  volume() {
    let radius = this.diameter / 2;
    return (Math.PI * radius * radius * this.height).toFixed(2);
  }
}

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const diameter = document.querySelector("#cyl-diameter").value;
  const height = document.querySelector("#cyl-height").value;

  if (diameter === "" || height === "") {
    alert(`지름과 높이를 입력해주세요`);
  } else {
    let cylinder = new Cylinder(diameter, height);
    result.innerText = `원기둥의 부피는 ${cylinder.volume()} 입니다`;
  }
});
