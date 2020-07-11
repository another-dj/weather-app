import React from "react";
import "./styles.css";

const WeatherIcon = ({ iconName }) => {
  return (
    <div className="icon">
      <img
        src={`http://openweathermap.org/img/wn/${iconName}@2x.png`}
        alt="icon"
      />
    </div>
  );
};

export default WeatherIcon;
