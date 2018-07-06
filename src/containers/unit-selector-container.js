
import { connect } from 'react-redux';

import { changeUnit } from '../actions';
import UnitSelector from '../components/unit-selector';

const mapStateToProps = (state) => {
  return {
    inCelsius: state.inCelsius,
  }
}

// add an action to change unit
const mapDispatchToProps = (dispatch) => {
  return {
    onChangeUnit: (inCelsius) => {
      dispatch(changeUnit(inCelsius))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UnitSelector);