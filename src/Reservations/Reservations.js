import React from 'react';
// import PropTypes from 'prop-types';
import './Reservations.css';
import Card from '../Card/Card';

const Reservations = props => {
  const reservedTables = props.reservations.map(reserved => {
    return (<Card 
      id = {reserved.id}
      key = {reserved.id}
      name = {reserved.name}
      date = {reserved.date}
      time = {reserved.time}
      num = {reserved.num}
    />)
  })
  return (
    <main className="reservations">
      {reservedTables}
    </main>
  )
}

export default Reservations;