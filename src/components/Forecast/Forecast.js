import React from 'react';
import styles from './Forecast.module.css';


const forecast = (props) => {

  const options = {weekday:'short'}
  const dayOfWeek = props.date;
  const printDay = new Date(dayOfWeek).toLocaleDateString('en-us', options);

  console.log(printDay);
  return(

    <div className={styles.Forecast}>
      <p>{printDay}</p>
      <img src={props.icon} alt="icon"/>
      <p>{ Math.round( props.high)}°</p>
      <p>{ Math.round( props.low )}°</p>
    </div>

  )

}

export default forecast;
