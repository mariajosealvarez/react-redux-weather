import React from 'react';
import styled from 'styled-components';

import ButtonLink from './styled-components/button-link';
import { FONT_COLOR } from '../constants';

const Wrapper = styled.div`
  font-size: 13px;
  color: ${FONT_COLOR};
  padding: 10px 0;
`;
class UnitSelector extends React.Component {
  handleOnChangeUnit = () => {
    this.props.onChangeUnit(!this.props.inCelsius);
  }

  render() {
    return (
      <Wrapper>
        <span>Display temperature in</span>
        <ButtonLink
          disabled={this.props.inCelsius}
          onClick={this.handleOnChangeUnit}
        >
          Celcius
        </ButtonLink>
        or
        <ButtonLink
          disabled={!this.props.inCelsius}
          onClick={this.handleOnChangeUnit}
        >
          Farenheit
        </ButtonLink>
      </Wrapper>
    )
  }
}

export default UnitSelector;