import React from 'react';

const WeatherInfo = ({ weatherData, inCelsius }) => {
  const minTemp = inCelsius ? weatherData.day.mintemp_c : weatherData.day.mintemp_f;
  const maxTemp = inCelsius ? weatherData.day.maxtemp_c : weatherData.day.maxtemp_f;

  return (
    <div>
      <p>{weatherData.date}</p>
      <p>{weatherData.day.condition.text}</p>
      <p>Min: {minTemp}</p>
      <p>Max: {maxTemp}</p>
      <img
        alt={weatherData.day.condition.text}
        src={weatherData.day.condition.icon}
      />
    </div>
  )
}

export default WeatherInfo;