import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <form>
        <input placeholder="Name" type="text"/>
        <input placeholder="Date" type="text" />
        <input placeholder="Time" type="text"/>
        <input placeholder="Number of Guests" type="number"/>
      </form>
    )
  }
}

export default Form;