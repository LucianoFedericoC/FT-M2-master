import React from 'react';
import Nav from "./components/Nav.jsx";
import Cards from "./components/Cards.jsx";
import './App.css';

export default function App() {

  const [cities, setCities] = React.useState([]);

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id != id));
  }

var apik = "4ae2636d8dfbdc3044bede63951a019b"

  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apik}&units=metric}`)
    .then(resultado => resultado.json())
    .then(recurso => {
if(recurso.main != undefined) {
  const ciudad = {

    min: Math.round(recurso.main.temp_min),
    max: Math.round(recurso.main.temp_max),
    img: recurso.weather[0].icon,
    id: recurso.id,
    wind: recurso.wind.speed,
    temp: recurso.main.temp,
    name: recurso.name,
    weather: recurso.weather[0].main,
    clouds: recurso.clouds.all,
    latitud: recurso.coord.lat,
    longitud: recurso.coord.lon

  }

  setCities(oldCities => [...oldCities, ciudad]);

}else {alert("Ciudad no encontrada")}


    })

  }

  return (
    <div className="App">

      <Nav onSearch={onSearch} />
      <Cards cities={cities} onClose={onClose} />

    </div>
  );
}
