const lat = 37.5066126;
const lng = 126.9702257;

let mapContainer = document.querySelector("#map"); //지도를 담을 영역의 DOM 레퍼런스
let mapOptions = {
  //지도를 생성할 때 필요한 기본 옵션
  center: new kakao.maps.LatLng(lat, lng), //지도의 중심좌표.
  level: 7, //지도의 레벨(확대, 축소 정도) 높아지면 높아질수록 멀리보임 closeout
};

let map = new kakao.maps.Map(mapContainer, mapOptions);

let clusterer = new kakao.maps.MakerClusterer({
  map: map,
  averageCenter: true,
  minLevel: 7,
});

let positions = [
  {
    title: `<div><a href="#" target="_blank">찬영이 집~</a></div>`,
    latlng: new kakao.maps.LatLng(lat, lng),
  },
  {
    title: `<div><a href="#" target="_blank">현충원</a></div>`,
    latlng: new kakao.maps.LatLng(37.5007792, 126.9784482),
  },
  {
    title: `<div><a href="#" target="_blank">흑석역</a></div>`,
    latlng: new kakao.maps.LatLng(37.5090394, 126.9634769),
  },
  {
    title: `<div><a href="#" target="_blank">센트레빌~</a></div>`,
    latlng: new kakao.maps.LatLng(37.5059309, 126.9651947),
  },
];
let markers = [];

for (let i = 0; i < positions.length; i++) {
  let marker = new kakao.maps.Marker({
    map: map,
    position: positions[i].latlng,
  });
  markers.push(marker);

  let infowindow = new kakao.maps.InfoWindow({
    content: positions[i].title,
  });

  const makeOverListener = (map, marker, infowindow) => {
    return () => {
      infowindow.open(map, marker, infowindow);
    };
  };
  const makeOutListener = (infowindow) => {
    return () => {
      infowindow.close();
    };
  };

  kakao.maps.event.addListener(
    marker,
    "mouseover",
    makeOverListener(map, marker, infowindow)
  );
  kakao.maps.event.addListener(marker, "mouseout", makeOutListener(infowindow));
}

clusterer.addMarkers(markers);
