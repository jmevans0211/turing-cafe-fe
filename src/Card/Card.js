import React from 'react';
import './Card.css'

const Card = props => {
  return(
    <div className="card"> 
      <h4>{props.name}</h4>
      <p>{props.date}</p>
      <p>{props.time}</p>
      <p>Number of Guests: {props.number}</p>
    </div>
  )

}

export default Card;