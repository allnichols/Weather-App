import React, { Component } from 'react';
import axios from 'axios';
import styles from './Weather.module.css';
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather';
import SideWeather from '../../components/SideWeather/SideWeather';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;


class Weather extends Component {

  state = {
    location: {},
    currentWeather: {},
    condition: {}
  }


  componentDidMount(){
    axios.get('https://api.apixu.com/v1/forecast.json?key=' + API_KEY + '&q=Houston&days=7')
    .then(response => {
      this.setState({
        currentWeather: response.data.current,
        location: response.data.location,
        condition: response.data.current.condition
       })
      console.log(response.data);
      console.log(response.data.current);
      console.log(response.data.current.condition);
      console.log(response.data.location);
    })
  }


  render(){


    return(
      <div className={styles.ContainerCurrent}>
        <CurrentWeather
          city={this.state.location.name}
          state={this.state.location.region}
          temp={this.state.currentWeather.temp_f}
          icon={this.state.condition.icon}
          description={this.state.condition.text}
        />
        <SideWeather
         precipitation={this.state.currentWeather.precip_in}
         humidity={this.state.currentWeather.humidity}
         wind={this.state.currentWeather.wind_mph}
        />


      </div>
    )
  }

}

export default Weather;
