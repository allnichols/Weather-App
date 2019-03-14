import React from 'react';
import styles from './MainData.module.css';
import Date from '../../components/Date/Date';


const currentWeather = (props) => {


  return(

    <div className={styles.MainCard}>
        <p>{props.city}, {props.state}</p>
        <Date/>
        <p>{props.temp} °F</p>
    </div>

  )
}

export default currentWeather;
