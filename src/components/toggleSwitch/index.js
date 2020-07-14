import React from "react";
import "./styles.css";

const Toggle = ({ onClick }) => {
  return (
    <div className="toggleContainer">
      <p>ºC</p>
      <button
        className="toggle"
        onClick={() => {
          onClick();
        }}
      >
        <span style={{ backgroundColor: "yellow", padding: "5px" }}></span>
        <span></span>
      </button>
      <p>ºF</p>
    </div>
  );
};

export default Toggle;
