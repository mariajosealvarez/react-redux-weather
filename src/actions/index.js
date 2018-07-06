import { GET_FORECAST } from './types';

export const getForecast = (location) => {
  return {
    type: GET_FORECAST,
    forecast: {
      list: [
        {
          min: 0,
          max: 10,
        },
        {
          min: 1,
          max: 11,
        },
        {
          min: 2,
          max: 1,
        }
      ],
    }
  }
};
