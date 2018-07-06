import React from 'react';

class UnitSelector extends React.Component {
  constructor(props){
    super(props);
    this.handleOnChangeUnit = this.handleOnChangeUnit.bind(this);
  }

  handleOnChangeUnit(){
    this.props.onChangeUnit(!this.props.inCelsius);
  }

  render() {
    return (
      <div>
        <button
          disabled={this.props.inCelsius}
          onClick={this.handleOnChangeUnit}
        >
          °C
        </button>
        <button
          disabled={!this.props.inCelsius}
          onClick={this.handleOnChangeUnit}
        >
          °F
        </button>
      </div>
    )
  }
}

export default UnitSelector;