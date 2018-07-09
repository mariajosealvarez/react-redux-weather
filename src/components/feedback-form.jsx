import React from 'react';
import styled from 'styled-components';

import Button from './styled-components/button';
import Input from './styled-components/input';
import { FONT_COLOR } from '../constants';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const FeedbackButton = Button.extend`
  max-width: 300px;
`

const Form = styled.form`
  justify-self: flex-start;
  color: ${FONT_COLOR};
  font-size: 16px;
  max-width: 300px;
`;

const Row = styled.div`
  margin: 10px 0;
  display: flex;
`;

const Label = styled.label`
  flex-grow: 1;
`
const InputForm = Input.extend`
  margin: 0;
  flex-grow: 3;
`

const Select = Button.withComponent('select');
const FrequencySelect = Select.extend`
  flex-grow: 3;
`

const Submit = Button.withComponent('input');

class FeedbackForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showForm: false,
      buttonText: 'Customize notifications',
      name: '',
      email: '',
      frequence: 'monthly',

    }
    this.handleShowFormClick = this.handleShowFormClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleShowFormClick(){
    this.setState((prevState) => ({
      showForm: !this.state.showForm,
      buttonText: prevState.showForm ? 'Customize notifications' : 'Hide Form',
    }));
  }

  handleInputChange(event){
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  }

  handleSelectChange(event){
    this.setState({
      frequence: event.target.value
    });
  }

  handleSubmit(event){
    console.info(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <Wrapper>
        <FeedbackButton onClick={this.handleShowFormClick}>{this.state.buttonText}</FeedbackButton>
        {
          this.state.showForm &&
          <Form
            onSubmit={this.handleSubmit}
          >
            <Row>
              <Label>Name: </Label>
              <InputForm
                name="name"
                type="text"
                placeholder="Name"
                onChange={this.handleInputChange}
              >
              </InputForm>
            </Row>
            <Row>
              <Label>Email: </Label>
              <InputForm
                name="email"
                type="text"
                placeholder="Email"
                onChange={this.handleInputChange}
              >
              </InputForm>
            </Row>
            <Row>
              <Label>Frequence: </Label>
              <FrequencySelect
                value={this.state.frequence}
                onChange={this.handleSelectChange}
              >
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </FrequencySelect>
            </Row>
            <Row>
              <Submit type="submit" value="Submit"></Submit>
            </Row>
          </Form>
        }
      </Wrapper>
    )
  }
};

export default FeedbackForm;
