const lat = 37.5066126;
const lng = 126.9702257;

let container = document.querySelector("#map"); //지도를 담을 영역의 DOM 레퍼런스
let options = {
  //지도를 생성할 때 필요한 기본 옵션
  center: new kakao.maps.LatLng(lat, lng), //지도의 중심좌표.
  level: 3, //지도의 레벨(확대, 축소 정도)
};

let map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

let markerPosition = new kakao.maps.LatLng(lat, lng);
let marker = new kakao.maps.Marker({
  position: markerPosition,
});

//지도위에 마커출력하기
marker.setMap(map);

let iwContent = `<div><a href="#" target="_blank">찬영이 집~</a></div>`;
let iwRemovable = true;

let infowindow = new kakao.maps.InfoWindow({
  content: iwContent,
  removable: iwRemovable,
});
//마커 클릭 시 출력되는 이벤트정의
kakao.maps.event.addListener(marker, "click", () => {
  infowindow.open(map, marker);
});
