import { GET_FORECAST } from '../actions/types';

const initialState = {
  forecast: [],
  inFarenheith: false,
  inCelsius: true,
}

const reducers = (state=initialState, action) => {
  switch(action.type) {
    case GET_FORECAST:
      return {
        forecast: action.forecast,
      }
    default:
      return state;
  }
};

export default reducers;