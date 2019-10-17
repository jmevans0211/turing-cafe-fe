import React from 'react';

const Card = props => {
  return(
    <div className="card"> 
      <h4>{props.name}</h4>
      <p>{props.date}</p>
      <p>{props.time}</p>
      <p>Number of Guests: {props.num}</p>
    </div>
  )

}

export default Card;