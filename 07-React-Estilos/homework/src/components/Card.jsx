import React from 'react';
import styles from './CardStyle.module.css';

export default function Card(props) {
  // acá va tu código
  return (<div className={styles.cardstyle}>

    <button className={styles.boton} onClick={props.onClose}> X </button>

    <h2 className={styles.titulo}> {props.name} </h2>
    <h3 className={styles.textoa}> Min </h3>
    <h3 className={styles.texto1}> {props.min} </h3>
    <h3 className={styles.textob}> Max </h3>
    <h3 className={styles.texto2}> {props.max} </h3>
    <img className={styles.img} src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="image" />
  </div>)
};