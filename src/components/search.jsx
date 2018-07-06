import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.state = {
      location: '',
    }
  }

  handleOnLocationChange(e){
    this.setState({
      location: e.target.value,
    })
  }

  handleSearchClick() {
    this.props.onSearch(this.state.location);
  }

  render() {
    return (
      <div>
        <span>Location: </span>
        <input
          type="text"
          placeholder="Enter the location"
          value = {this.state.location}
          onChange={(e) => this.handleOnLocationChange(e) }/>
        <button onClick={this.handleSearchClick}>Search</button>
      </div>
    )
  }
}

export default Search;