import { useState, useEffect } from "react";
import "./App.css";
import WeatherBox from "./WeatherBox";
import WeatherButton from "./WeatherButton";

//mdn -> weather api
const getCurrentLocation = () => {
  navigator.geolocation.getCurrentPosition((position) => {
    //lat 위도 lon 경도 coords.latitude/longitude >> 위도경도 잡아오는 문법
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    // console.log(lat, lon);
    getWeatherByCurrentLocation(lat, lon);
  });
};

const getWeatherByCurrentLocation = async (lat, lon) => {
  let url = `
  https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a673bdc8b6613ffb95290f53ddefe5e9&units=metric
  `;
  let response = await fetch(url);
  // console.log(url);
  let data = await response.json();
  // console.log(data);
};

function App() {
  const [weather, setWeather] = useState("Rain");
  const [city, setCity] = useState("seoul");
  //cityname 이렇게 안적으면 안된다 .. >> 원하는 글자가 있는 듯
  const cities = ["paris", "new york", "tokyo", "seoul"];

  useEffect(() => {
    // console.log(city);
    if (city === "") {
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }
  }, [city]);

  //도시에 따른 날씨선택
  const getWeatherByCity = async () => {
    console.log(city);
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a673bdc8b6613ffb95290f53ddefe5e9&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    // console.log(data);
    setWeather(data);
  };

  getWeatherByCity();

  return (
    <div className="container">
      <WeatherBox weather={weather} />
      <WeatherButton cities={cities} setCity={setCity} />
    </div>
  );
}

export default App;
