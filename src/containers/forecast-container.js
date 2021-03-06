import { connect } from 'react-redux';
import Forecast from '../components/forecast';

const mapStateToProps = (state) => {
  return {
    forecast: state.forecast,
    location: state.location,
  }
}

export default connect(mapStateToProps)(Forecast);
