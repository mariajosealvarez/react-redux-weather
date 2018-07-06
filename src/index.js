import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import SearchContainer from './containers/search-container';
import './index.css';

class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
        <SearchContainer />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
