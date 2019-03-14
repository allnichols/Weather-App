import React from 'react';

const sideWeather = (props) => {
  return(
    <div>
      <p>Precipitation: {props.precipitation}</p>
      <p>Humidity: {props.humidity}%</p>
      <p>Wind: {props.wind} mph</p>
    </div>
  )
}

export default sideWeather;
