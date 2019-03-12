import React, { Component } from 'react';
import axios from 'axios';
import styles from './Weather.module.css';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;


class Weather extends Component {

  state = {
    data: null
  }


  componentDidMount(){
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=Houston&units=imperial&appid=' + API_KEY)
    .then(response => {
      this.setState({data: response.data})
      console.log(response.data);
    })
  }

  render(){
    return <p className={styles.Container}>Weather</p>
  }

}

export default Weather;
