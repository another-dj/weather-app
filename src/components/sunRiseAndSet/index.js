import React from "react";
import "./styles.css";

const Sun = ({ sunRise, sunSet }) => {
  return (
    <div className="sun">
      <p>Sunrise: {sunRise}</p>
      <p>Sunset: {sunSet}</p>
    </div>
  );
};

export default Sun;
