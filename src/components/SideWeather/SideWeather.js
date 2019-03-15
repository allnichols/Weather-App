import React from 'react';
import styles from './SideWeather.module.css';

const sideWeather = (props) => {
  return(
    <div className={styles.List}>
      <ul>
        <li>Precipitation: <span>{props.precipitation}</span></li>
        <li>Humidity: <span>{props.humidity}%</span></li>
        <li>Wind: <span>{props.wind} mph</span></li>
      </ul>
    </div>
  )
}

export default sideWeather;
