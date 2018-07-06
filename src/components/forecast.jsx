import React from 'react';

import WeatherInfoContainer from '../containers/weather-info-container';
import './forecast.css';

const Forecast = ({ forecast }) => {
  return (
    <div className="forecastWrapper">
      {
        forecast && forecast.map((forecastDay) => (
          <WeatherInfoContainer
            key={forecastDay.date_epoch}
            weatherData={forecastDay}
          />
        ))
        // TODO add more button
      }
    </div>
  )
}

// TODO add PropTypes validation

export default Forecast;
