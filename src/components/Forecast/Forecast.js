import React from 'react';
import styles from './Forecast.module.css';


const forecast = (props) => {

  const options = {weekday:'short'}
  const dayOfWeek = props.date;
  const printDay = new Date(dayOfWeek).toLocaleDateString('en-us', options);

  return(

    <div className={styles.Forecast} onClick={props.clicked}>
      <p>{printDay}</p>
      <img src={props.icon} alt="icon"/>
      <p>{ Math.round( props.high)}°</p>
      <p>{ Math.round( props.low )}°</p>
    </div>

  )

}

export default forecast;
