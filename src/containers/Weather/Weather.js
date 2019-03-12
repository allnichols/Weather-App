import React, { Component } from 'react';
import axios from 'axios';
import styles from './Weather.module.css';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;


class Weather extends Component {

  state = {
    main: {},
    dayOfWeek: null;
  }


  componentDidMount(){
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=Houston&units=imperial&appid=' + API_KEY)
    .then(response => {
      this.setState({main: response.data.main })
      console.log(response.data);
    })
  }

  dayOfWeekHandler(){
  
  }


  render(){

    return(
      <div className={styles.Container}>
        <h1>Weather</h1>
      </div>
    )
  }

}

export default Weather;
