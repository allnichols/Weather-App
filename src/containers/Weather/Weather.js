import React, { Component } from 'react';
import axios from 'axios';
import styles from './Weather.module.css';
import MainData from '../../components/MainData/MainData';
import Date from '../../components/Date/Date';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;


class Weather extends Component {

  state = {
    location: '',
    weather: [],
    mainWeather: {}
  }


  componentDidMount(){
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=Houston,Texas&units=imperial&appid=' + API_KEY)
    .then(response => {
      this.setState({
        mainWeather: response.data.main,
        location: response.data.name,
        weather: response.data.weather
       })
      console.log(response.data);
    })
  }


  render(){
    const icon = this.state.weather.map(data=> {
      let icon = "http://openweathermap.org/img/w/" + data.icon + ".png";
      return (
         <img src={icon} alt="weather" key={data.id}/>
      )
    })

    return(
      <div className={styles.Container}>
        <Date />
        {icon}
          <MainData
          place={this.state.location}
          temp={this.state.mainWeather.temp}
          />
      </div>
    )
  }

}

export default Weather;
