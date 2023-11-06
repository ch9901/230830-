const getLocation = document.querySelector("#getlocation");

let showPosition = (position) => {
  document.querySelector("#result").innerHTML = `
  <b>위도 : ${position.coords.latitude.toFixed(2)}</b>
  <b>경도 : ${position.coords.longitude.toFixed(2)}</b>
  `;
};
let errPosition = (err) => {
  alert(err.message);
};

getLocation.addEventListener("click", (e) => {
  e.preventDefault();
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, errPosition);
  } else {
    alert(`geolocation을 지원하지않습니다.`);
  }
});
