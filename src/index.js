import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

import store from './store';
import SearchContainer from './containers/search-container';
import Forecast from './containers/forecast-container';
import UnitSelector from './containers/unit-selector-container';
import './index.css';
import FeedbackForm from './components/feedback-form';
import ErrorModalContainer from './containers/error-modal-container';

class App extends React.Component {
  render(){
    let persistor = persistStore(store);

    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div>
            <SearchContainer />
            <UnitSelector />
            <Forecast />
            <FeedbackForm />
            <ErrorModalContainer />
          </div>
        </PersistGate>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
