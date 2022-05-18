import React from 'react';
import styles from "./SearchBar.module.css" 

export default function SearchBar(props) {
  // acá va tu código
  return (<div>

    <input className={ styles.searchbar } id="borrar" type="text" placeholder='Ciudad...' />
    <button className={ styles.boton } onClick={() => props.onSearch("ciudadag")}> Agregar </button>

  </div>)
};