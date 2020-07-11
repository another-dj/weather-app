import React from "react";
import "./styles.css";

const Temperature = ({ temperature }) => {
  return <p className="temperature">{temperature}</p>;
};

export default Temperature;
