import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import SearchContainer from './containers/search-container';
import Forecast from './containers/forecast-container';
import UnitSelector from './containers/unit-selector-container';
import './index.css';

class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
        <div>
          <SearchContainer />
          <UnitSelector />
          <Forecast />
        </div>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
