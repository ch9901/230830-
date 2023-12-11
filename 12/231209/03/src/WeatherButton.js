import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const WeatherButton = ({ cities, setCity }) => {
  // console.log(cities);

  return (
    <div>
      <Button className="button" variant="warning">
        Current Location
      </Button>
      {cities.map((it) => (
        <Button
          key={it}
          className="button"
          onClick={() => setCity(it)}
          variant="warning"
        >
          {it}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
