import React, { Component } from 'react';
import axios from 'axios';
import styles from './Weather.module.css';
import MainData from '../../components/MainData/MainData';
import Date from '../../components/Date/Date';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;


class Weather extends Component {

  state = {
    location: '',
    current: {}
  }


  componentDidMount(){
    axios.get('https://api.apixu.com/v1/forecast.json?key=' + API_KEY + '&q=Houston&days=7')
    .then(response => {
      this.setState({
        currentWeather: response.data.current,

       })
      console.log(response.data.current);
    })
  }


  render(){
    // const icon = this.state.weather.map(data=> {
    //   let icon = "http://openweathermap.org/img/w/" + data.icon + ".png";
    //   return (
    //       <div className={styles.Desc} key={data.id}>
    //       <img src={icon} alt="weather"/>
    //       <p>{data.main}</p>
    //      </div>
    //   )
    // })

    return(
      <div className={styles.Container}>
        <Date />

          <MainData

          />
      </div>
    )
  }

}

export default Weather;
