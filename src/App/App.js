import React, { Component } from 'react';
import './App.css';
import { getReservations, postReservation } from '../apiCalls';

import Form from '../Form/Form';
import Reservations from '../Reservations/Reservations';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],

    }
  }

  componentDidMount() {
    getReservations()
      .then(reservations => this.setState({ reservations }))
      .catch(error => error);
  }

  addReservation(newReservation){
    postReservation(newReservation)
      .then(reservations => this.setState({ reservations: [...this.state.reservations, newReservation] }))
      .catch(error => error)
  }

  render() {
    return (
      <div className="App">
        <header>

          <h1 className='app-title'>Turing Cafe Reservations</h1>
          <div className='resy-form'>
            <Form addReservation={this.addReservation}/>
          </div>
        </header>
        <div className='resy-container'>
          <Reservations reservations={this.state.reservations} />
        </div>
      </div>
    )
  }
}

export default App;
