import React, { Component } from 'react';
import axios from 'axios';
import styles from './Weather.module.css';
import MainData from '../../components/MainData/MainData';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;


class Weather extends Component {

  state = {
    location: '',
    weather: [],
    mainWeather: {},
    dayOfWeek: null
  }


  componentDidMount(){
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=Houston,Texas&units=imperial&appid=' + API_KEY)
    .then(response => {
      this.setState({
        mainWeather: response.data.main,
        location: response.data.name,
        weather: response.data.weather
       })
      console.log(response.data.weather);
    })
  }

  dayOfWeekHandler(){
  //add array and .getDay();
  }


  render(){
    const description = this.state.weather.map(data=> {
      let icon = "http://openweathermap.org/img/w/" + data.icon + ".png";
      return (
        <div key={data.id}>
         <p>{data.main}</p>
         <img src={icon} alt="weather"/> 
        </div>
      )
    })

    return(
      <div className={styles.Container}>
        <h1>Weather</h1>
        {description}
          <MainData
          place={this.state.location}
          temp={this.state.mainWeather.temp}
          />
      </div>
    )
  }

}

export default Weather;
