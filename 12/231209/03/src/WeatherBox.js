import React from "react";

const WeatherBox = ({ weather }) => {
  console.log(weather);
  return (
    <div className="weather-box">
      <div>{weather.name}</div>
      <h2>
        temp : {weather.main.temp} / humidity : {weather.main.humidity}
      </h2>
      <h2>{weather.weather[0].main}</h2>
    </div>
  );
};

export default WeatherBox;
