import React, { useState } from "react";
import "./styles.css";

const Toggle = ({ option1, option2, onClick }) => {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="toggleContainer">
      <p>{option1}</p>
      <button
        className="toggle"
        onClick={() => {
          setToggle(!toggle);
          return onClick();
        }}
      >
        <img
          style={toggle ? { transform: "scaleX(-1)" } : {}}
          src={require("../../assets/images/toggle.png")}
          alt="toggle"
        />
      </button>
      <p>{option2}</p>
    </div>
  );
};

export default Toggle;
