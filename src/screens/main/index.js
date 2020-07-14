import React, { useState, useEffect } from "react";
import "./styles.css";

import DropdownMenu from "../../components/dropdownMenu/dropdownmenu";
import ToggleSwitch from "../../components/toggleSwitch/toggleswitch";
import Weather from "../../components/weather/weather";
import SunRiseAndSet from "../../components/sunRiseAndSet/sunriseandset";
import Loading from "../../loading/loading";
import { api, options } from "../../config";
import {
  convertCelsius,
  convertFahrenheit,
  timeConverter,
} from "../../utils/utils";

const Screen = () => {
  const [city, setCity] = useState(options[0]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [weather, setWeather] = useState({
    temperature: 0,
    sunRise: 0,
    sunSet: 0,
    icon: "",
    timezone: 0,
    value: "",
  });

  const onSelect = (option) => {
    setCity(option);
  };

  const handleToggle = () => {
    console.log("-------->", weather);
    let temp;
    if (weather.value === "ºC") {
      temp = convertFahrenheit(weather.temperature);
      setWeather({
        ...weather,
        value: "ºF",
        temperature: temp,
      });
    } else if (weather.value === "ºF") {
      temp = convertCelsius(weather.temperature);
      setWeather({
        ...weather,
        value: "ºC",
        temperature: temp,
      });
    }
    console.log("-------->2", weather);
  };

  const getAppBody = () => {
    if (error) {
      return <p>Something went wrong</p>;
    } else if (loading) {
      return <Loading />;
    } else if (weather.icon) {
      return (
        <>
          <div className="mid">
            <Weather
              temperature={Math.round(weather.temperature)}
              iconName={weather.icon}
            />
          </div>
          <div className="bottom">
            <SunRiseAndSet
              sunRise={timeConverter(weather.sunRise, weather.timezone)}
              sunSet={timeConverter(weather.sunSet, weather.timezone)}
            />
          </div>
        </>
      );
    }
  };

  useEffect(() => {
    const getData = async (imperial) => {
      setError(false);
      setLoading(true);
      let uri = "";
      if (imperial) {
        uri = `${api.base}weather?id=${city.value}&appid=${api.key}`;
        //   setWeather({ ...weather, value: "ºF" });
      } else {
        uri = `${api.base}weather?id=${city.value}&units=metric&appid=${api.key}`;
        //   setWeather({ ...weather, value: "ºC" });
      }
      console.log(uri);
      fetch(uri)
        .then((results) => results.json())
        .then((data) => {
          setWeather({
            temperature: data.main.temp,
            sunRise: data.sys.sunrise,
            sunSet: data.sys.sunset,
            icon: data.weather[0].icon,
            timezone: data.timezone,
            value: imperial ? "ºF" : "ºC",
          });
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
          setError(true);
        });
      console.log(weather.value);
    };

    if (weather.value === "ºF") {
      getData(true);
    } else {
      getData();
    }
  }, [city]);

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
      {getAppBody()}
    </div>
  );
};

export default Screen;
