import React from 'react';
import styled from 'styled-components';

import { FONT_COLOR } from '../constants';
import Button from './styled-components/button';
import Input from './styled-components/input';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const Title = styled.span`
  margin-right: 10px;
  font-size: 24px;
  text-align: center;
  color: ${FONT_COLOR};
`;

class Search extends React.Component {
  state = {
    location: this.props.location || '',
  }

  handleOnLocationChange = (e) => {
    this.setState({
      location: e.target.value,
    })
  }

  handleSearchClick = () => {
    this.props.onSearch(this.state.location);
  }

  render() {
    return (
      <Wrapper>
        <Title>Location: </Title>
        <Input
          type="text"
          placeholder="Enter the location"
          value = {this.state.location}
          onChange={(e) => this.handleOnLocationChange(e) }>
        </Input>
        <Button onClick={this.handleSearchClick}>Search</Button>
      </Wrapper>
    )
  }
}

export default Search;