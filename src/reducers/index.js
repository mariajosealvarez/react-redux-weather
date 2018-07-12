import {
  GET_FORECAST,
  CHANGE_UNIT,
  SHOW_ERROR_MODAL,
  HIDE_ERROR_MODAL
} from '../actions/types';

const initialState = {
  forecast: [],
  inCelsius: true,
  location: '',
  displayErrorModal: false,
}

const reducers = (state=initialState, action) => {
  switch(action.type) {
    case GET_FORECAST:
      return {
        ...state,
        forecast: action.forecast,
        location: action.location,
      }
    case CHANGE_UNIT:
      return {
        ...state,
        inCelsius: action.inCelsius
      }
    case SHOW_ERROR_MODAL:
      return {
        ...state,
        displayErrorModal: action.displayErrorModal,
        error: action.error
      }
    case HIDE_ERROR_MODAL:
      return {
        ...state,
        displayErrorModal: action.displayErrorModal,
      }
    default:
      return state;
  }
};

export default reducers;