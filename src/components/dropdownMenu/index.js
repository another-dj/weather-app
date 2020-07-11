import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./styles.css";

const dropDown = ({ options, onChange, selected = options[0] }) => {
  return <Dropdown 
  className="dropMenu" options={options} value={selected} onChange={onChange} />;
};

export default dropDown;
