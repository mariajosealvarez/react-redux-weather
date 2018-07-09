import axios from 'axios';

import {
  GET_FORECAST,
  CHANGE_UNIT,
} from './types';

const API_URL = 'http://api.apixu.com/v1/forecast.json?';
const APP_ID = 'b4183bef17a8458b83f170022180607';

const genApiURL = (location) => {
  return `${API_URL}q=${location}&key=${APP_ID}&days=5`;
};

export const getForecastSuccess = (location, forecast) => {
  return {
    type: GET_FORECAST,
    forecast,
    location,
  }
};

export const getForecast = (location) => {
  return (dispatch) => {
    return axios.get(genApiURL(location))
      .then(response => {
        dispatch(getForecastSuccess(location, response.data.forecast.forecastday));
      })
      .catch(error => {
        throw(error);
      });
  };
};


export const changeUnit = (inCelsius) => {
  return {
    type: CHANGE_UNIT,
    inCelsius,
  }
}