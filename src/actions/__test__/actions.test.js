import * as actions from '../../actions';
import * as types from '../../actions/types';

describe('actions', () => {
  it('should create an action to change the units', () => {
    const inCelcius = true;
    const expectedAction = {
      type: types.CHANGE_UNIT,
      inCelsius: inCelcius,
    }
    expect(actions.changeUnit(inCelcius)).toEqual(expectedAction);
  })
})