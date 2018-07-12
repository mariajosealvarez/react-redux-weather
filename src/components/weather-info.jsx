import React from 'react';
import { pathOr } from 'ramda';

import './weather-info.css';

const WeatherInfo = ({ weatherData, inCelsius }) => {
  const emptyText = '-';
  const minTemp = inCelsius ? pathOr(emptyText, ['day', 'mintemp_c'], weatherData) : pathOr(emptyText, ['day', 'mintemp_f'], weatherData);
  const maxTemp = inCelsius ? pathOr(emptyText, ['day', 'maxtemp_c'], weatherData) : pathOr(emptyText, ['day', 'maxtemp_f'], weatherData);

  return (
    <div className="weatherInfo">
      <p>{pathOr('', ['date'], weatherData)}</p>
      <p>{pathOr('', ['day', 'condition', 'text'], weatherData)}</p>
      <p>Min: {minTemp}</p>
      <p>Max: {maxTemp}</p>
      <img
        alt={pathOr('', ['day', 'condition', 'text'], weatherData)}
        src={pathOr('', ['day', 'condition', 'icon'], weatherData)}
      />
    </div>
  )
}

export default WeatherInfo;