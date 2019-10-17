import React from 'react';
// import PropTypes from 'prop-types';
import './Reservations.css';
import Card from '../Card/Card';

const Reservations = props => {
  const reservedTables = props.reservations.map(reserved => {
    return (<Card 
      id = {reserved.id}
      name = {reserved.name}
      date = {reserved.date}
      time = {reserved.time}
      number = {reserved.number}
    />)
  })
  return (
    <main className="reservations">
      {reservedTables}
    </main>
  )
}

export default Reservations;