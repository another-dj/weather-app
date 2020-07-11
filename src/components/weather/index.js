import React from "react";
import Temperature from "../temperature";
import WeatherIcon from "../weatherIcon";

const Weather = ({ temperature, iconName }) => {
  return (
    <div className="tempContainer">
      <Temperature temperature={temperature} />
      <WeatherIcon iconName={iconName} />
    </div>
  );
};

export default Weather;
