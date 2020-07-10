import React, { useState } from "react";
import "./styles.css";

const Toggle = ({ option1, option2, onClick }) => {
  const [toggle, setToggle] = useState(true);
  return (
    <button
      onClick={() => {
        setToggle(!toggle);
        return onClick();
      }}
    >
      <p>{option1}</p>
      {toggle ? (
        <img
          style={{ transform: "scaleX(-1)" }}
          src={require("../../assets/toggle.png")}
          alt="toggle"
        />
      ) : (
        <img src={require("../../assets/toggle.png")} alt="toggle" />
      )}
      <p>{option2}</p>
    </button>
  );
};

export default Toggle;
