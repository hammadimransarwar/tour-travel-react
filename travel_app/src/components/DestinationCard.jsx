import React from 'react';
function DestinationCard(props) {
  return (
    <div className="destination-card">
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <p>{props.location}</p>
      <h2>{props.price}</h2>
    </div>
  );
}

export default DestinationCard;