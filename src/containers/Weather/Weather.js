import React, { Component } from 'react';
import axios from 'axios';
import styles from './Weather.module.css';
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;


class Weather extends Component {

  state = {
    location: {},
    currentWeather: {}
  }


  componentDidMount(){
    axios.get('https://api.apixu.com/v1/forecast.json?key=' + API_KEY + '&q=Houston&days=7')
    .then(response => {
      this.setState({
        currentWeather: response.data.current,
        location: response.data.location
       })
      console.log(response.data.currentWeather);
      console.log(response.data.location);
    })
  }


  render(){


    return(
      <div className={styles.Container}>
    <CurrentWeather
      city={this.state.location.name}
      state={this.state.location.region}
      temp={this.state.currentWeather.temp_f}
    />


      </div>
    )
  }

}

export default Weather;
