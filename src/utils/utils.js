export const convertFahrenheit = (temperature) => {
  const fahrenheit = temperature * 1.8 + 32;
  return fahrenheit;
};

export const convertCelsius = (temperature) => {
  const celsius = (temperature - 32) / 1.8;
  return celsius;
};

export const timeConverter = (unixTime, timezone) => {
  const a = unixTime + timezone;
  const date = new Date(a * 1000);
  const hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const min =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const time = hour + ":" + min;
  return time;
};
