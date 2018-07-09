import React from 'react';
import styled from 'styled-components';

import WeatherInfoContainer from '../containers/weather-info-container';
import { FONT_COLOR } from '../constants';

const ForecastWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border: 1px solid ${FONT_COLOR};
  border-radius: 3px;
  padding: 20px;
  margin: 10px 0;
  flex-flow: row wrap;
`;

const Location = styled.div`
  font-size: 20px;
  margin: 10px 0;
`

const Forecast = ({ location, forecast }) => {
  return (
    <div>
      <Location>
        Current forecast for: <i>{location}</i>
      </Location>
      <ForecastWrapper>
        {
          forecast.length ? forecast.map((forecastDay) => (
            <WeatherInfoContainer
              key={forecastDay.date_epoch}
              weatherData={forecastDay}
            />
          )) :
          <div> No data yet </div>
          // TODO add more button
        }
      </ForecastWrapper>
    </div>
  )
}

// TODO add PropTypes validation

export default Forecast;
