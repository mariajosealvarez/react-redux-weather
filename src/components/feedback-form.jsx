import React from 'react';

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
      <div>
        <button onClick={this.handleShowFormClick}>{this.state.buttonText}</button>
        {
          this.state.showForm &&
          <form
            onSubmit={this.handleSubmit}
          >
            <div>
              <label>Name: </label>
              <input
                name="name"
                type="text"
                placeholder="Name"
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <label>Email: </label>
              <input
                name="email"
                type="text"
                placeholder="Email"
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <label>Frequence: </label>
              <select
                value={this.state.frequence}
                onChange={this.handleSelectChange}
              >
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>
            <div>
              <input type="submit" value="Submit" />
            </div>
          </form>
        }
      </div>
    )
  }
};

export default FeedbackForm;
