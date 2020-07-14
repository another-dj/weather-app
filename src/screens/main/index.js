import React, { useState, useEffect } from "react";
import "./styles.css";

import DropdownMenu from "../../components/dropdownMenu/dropdownmenu";
import ToggleSwitch from "../../components/toggleSwitch";
import Weather from "../../components/weather";
import SunRiseAndSet from "../../components/sunRiseAndSet";
import { api, options } from "../../config";

const Screen = () => {
  const [city, setCity] = useState(options[0]);
  const [toggle, setToggle] = useState(true);
  const [temperature, setTemperature] = useState("0 ºC");
  const [weather, setWeather] = useState({
    temperature: 0,
    sunRise: 0,
    sunSet: 0,
    icon: "",
    timezone: 0,
  });

  useEffect(() => {
    fetch(`${api.base}weather?id=${city.value}&units=metric&appid=${api.key}`)
      .then((results) => results.json())
      .then((data) => {
        setWeather({
          temperature: data.main.temp,
          sunRise: data.sys.sunrise,
          sunSet: data.sys.sunset,
          icon: data.weather[0].icon,
          timezone: data.timezone,
        });
        setTemperature(`${Math.round(data.main.temp)} ºC`);
      });
  }, [city]);

  const onSelect = (option) => {
    setCity(option);
  };

  const handleToggle = () => {
    setToggle(!toggle);
    if (toggle) {
      convertFahrenheit();
    } else {
      convertCelsius();
    }
  };

  const convertFahrenheit = () => {
    const fahrenheit = weather.temperature * 1.8 + 32;
    setTemperature(`${Math.round(fahrenheit)} ºF`);
  };
  const convertCelsius = () => {
    setTemperature(`${Math.round(weather.temperature)} ºC`);
  };

  const timeConverter = (unixTime, timezone) => {
    const a = unixTime + timezone;
    const date = new Date(a * 1000);
    const hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    const min =
      date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    const time = hour + ":" + min;
    return time;
  };

  return (
    <div className="container">
      <div className="top">
        <div>
          <DropdownMenu
            options={options}
            onChange={onSelect}
            selected={city.label}
          />
        </div>
        <ToggleSwitch option1="ºC" option2="ºF" onClick={handleToggle} />
      </div>
      <div className="mid">
        <Weather temperature={temperature} iconName={weather.icon} />
      </div>
      <div className="bottom">
        <SunRiseAndSet
          sunRise={timeConverter(weather.sunRise, weather.timezone)}
          sunSet={timeConverter(weather.sunSet, weather.timezone)}
        />
      </div>
    </div>
  );
};

export default Screen;
