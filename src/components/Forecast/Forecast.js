import React from 'react';
import styles from './Forecast.module.css';


const forecast = (props) => {

  return(

    <div className={styles.Forecast}>
      <p>{props.high}</p>
      <p>{props.low}</p>
    </div>

  )

}

export default forecast;
