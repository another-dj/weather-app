import React, { useState } from "react";
import "./styles.css";

import DropdownMenu from "../../components/dropdownMenu";
import ToggleSwitch from "../../components/toggleSwitch";
import Weather from "../../components/weather";
import SunRiseAndSet from "../../components/sunRiseAndSet";
import { api, options } from "../../config";

const Screen = () => {
  const [city, setCity] = useState(options[0].value);
  const onSelect = (option) => {
    setCity(option.value);
  };

  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
    console.log(toggle);
  };

  return (
    <div className="container">
      <div className="top">
        <DropdownMenu options={options} onChange={onSelect} />
        <ToggleSwitch
          option1="ºC"
          option2="ºF"
          onClick={handleToggle}
        />
      </div>
      <div>{toggle ? "ºC" : "ºF"}</div>
      <div>Weather</div>
    </div>
  );
};

export default Screen;
