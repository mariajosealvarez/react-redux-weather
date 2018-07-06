import {
  GET_FORECAST,
  CHANGE_UNIT,
} from '../actions/types';

const initialState = {
  forecast: [],
  inCelsius: true,
}

const reducers = (state=initialState, action) => {
  switch(action.type) {
    case GET_FORECAST:
      return {
        ...state,
        forecast: action.forecast,
      }
    case CHANGE_UNIT:
      return {
        ...state,
        inCelsius: action.inCelsius
      }
    default:
      return state;
  }
};

export default reducers;