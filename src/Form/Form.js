import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      customer: '',
      date: '',
      time: '',
      guests: ''
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value})
     }

  render() {
    console.log(this.state.date)
    return (
      <form>
        <input placeholder="Name" type="text" name="customer" onChange={this.handleChange}/>
        <input placeholder="Date" type="text" name="date" onChange={this.handleChange}/>
        <input placeholder="Time" type="text" name="time" onChange={this.handleChange}/>
        <input placeholder="Number of Guests" type="number" name="guests" onChange={this.handleChange}/>
      </form>
    )
  }
}

export default Form;