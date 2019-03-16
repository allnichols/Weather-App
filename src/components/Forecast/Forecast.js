import React from 'react';
import styles from './Forecast.module.css';


const forecast = (props) => {

  return(

    <div className={styles.Forecast}>
      <p>{ Math.round( props.high)}°</p>
      <p>{ Math.round( props.low )}°</p>
    </div>

  )

}

export default forecast;
