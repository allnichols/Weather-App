import React from 'react';
import styles from './MainData.module.css';
import Date from '../../components/Date/Date';


const currentWeather = (props) => {


  return(

    <div className={styles.MainCard}>

      <div className={styles.LocationTemp}>
          <p>{props.city}, {props.state}</p>
          <Date/>
          <p>{props.description}</p>
        <div className={styles.Temp}>
          <img src={props.icon} alt="icon"/>
          <h1>{props.temp} <span>°F</span></h1>
        </div>
      </div>

    </div>

  )
}

export default currentWeather;
