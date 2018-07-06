import { connect } from 'react-redux';
import WeatherInfo from '../components/weather-info';


const mapStateToProps = (state) => {
  return {
    inCelsius: state.inCelsius,
  }
}

export default connect(mapStateToProps)(WeatherInfo);
