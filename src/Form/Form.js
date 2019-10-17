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

  handleSubmit = e => {
    e.preventDefault()
    this.props.addReservation(this.state)
  }

  render() {
    return (
      <form>
        <input placeholder="Name" type="text" name="customer" onChange={this.handleChange}/>
        <input placeholder="Date" type="text" name="date" onChange={this.handleChange}/>
        <input placeholder="Time" type="text" name="time" onChange={this.handleChange}/>
        <input placeholder="Number of Guests" type="number" name="guests" onChange={this.handleChange}/>
        <button onClick={this.handleSubmit}>Make Reservation</button>
      </form>
    )
  }
}

export default Form;