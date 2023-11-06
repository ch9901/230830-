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
    
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    let watchId = navigator.geolocation.watchPosition(
      showPosition,
      errPosition,
      options
    );

    setTimeout(() => {
      navigator.geolocation.clearWatch(watchId);
    }, 300000);

  } else {
    alert(`geolocation을 지원하지않습니다.`);
  }
});
