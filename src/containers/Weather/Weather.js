import React, { Component } from 'react';
import axios from 'axios';
import styles from './Weather.module.css';
import MainData from '../../components/MainData/MainData';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;


class Weather extends Component {

  state = {
    location: '',
    main: {},
    dayOfWeek: null
  }


  componentDidMount(){
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=Houston,Texas&units=imperial&appid=' + API_KEY)
    .then(response => {
      this.setState({
        main: response.data.main,
        location: response.data.name
       })
      console.log(response.data);
    })
  }

  dayOfWeekHandler(){
  //add array and .getDay();
  }


  render(){

    return(
      <div className={styles.Container}>
        <h1>Weather</h1>
          <MainData
          place={this.state.location}
          temp={this.state.main.temp}
          />
      </div>
    )
  }

}

export default Weather;
