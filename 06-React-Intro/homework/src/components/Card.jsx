import React from 'react';

export default function Card(props) {
  // acá va tu código
  return (<div>

    <button onClick={props.onClose}> X </button>

    <h2> {props.name} </h2>
    <h3> Min {props.min} </h3>
    <h3> Max {props.max} </h3>
     <h3> <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="image" /> </h3>
  </div>)
};