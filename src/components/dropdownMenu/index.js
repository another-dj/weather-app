import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const dropDown = ({ options, onChange }) => {
  const defaultOption = options[0];
  console.log(options);

  return (
    <Dropdown options={options} value={defaultOption} onChange={onChange} />
  );
};

export default dropDown;
