import React from 'react';
import { connect } from 'react-redux';

import { getForecast } from '../actions';
import Search from "../components/search";

class SearchContainer extends React.Component {
  render() {
    return (
      <Search
        onSearch = {this.props.onSearch}
      />
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearch: location => {
      dispatch(getForecast(location))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(SearchContainer);