import axios from 'axios';
import { path } from 'ramda';

import {
  GET_FORECAST,
  CHANGE_UNIT,
  SHOW_ERROR_MODAL,
  HIDE_ERROR_MODAL,
} from './types';

import { DAYS } from '../constants';

const API_URL = 'http://api.apixu.com/v1/forecast.json?';
const APP_ID = 'b4183bef17a8458b83f170022180607';

const genApiURL = (location) => {
  return `${API_URL}q=${location}&key=${APP_ID}&days=${DAYS}`;
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
        dispatch(getForecastSuccess(location, path(['data', 'forecast', 'forecastday'], response)));
      })
      .catch(error => {
        // TODO send error message to the modal
        dispatch(showErrorModal(path(['response', 'data', 'error'], error)));
      });
  };
};

export const changeUnit = (inCelsius) => {
  return {
    type: CHANGE_UNIT,
    inCelsius,
  }
}

export const showErrorModal = (error) => {
  return {
    type: SHOW_ERROR_MODAL,
    displayErrorModal: true,
    error
  }
}

export const hideErrorModal = () => {
  return {
    type: HIDE_ERROR_MODAL,
    displayErrorModal: false,
  }
}

