import React from 'react';
// import cities from '../data';
import Card from './Card';

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map

  return (<div>

    {props.cities.map(c => <Card
      name={c.name}
      min={c.main.temp_min}
      max={c.main.temp_max}
      img={c.weather[0].icon}
      onClose={() => alert(c.name)}
      Key={c.id} />)}

  </div>)
};
