import React from 'react';
// import PropTypes from 'prop-types';
import Card from '../Card/Card';

const Reservations = props => {
  console.log(props.reservations)
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
    <main>
      {reservedTables}
    </main>
  )
}

export default Reservations;