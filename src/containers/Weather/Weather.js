import React, { Component } from 'react';
import axios from 'axios';
import styles from './Weather.module.css';
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather';
import SideWeather from '../../components/SideWeather/SideWeather';
import Forecast from '../../components/Forecast/Forecast';
import Auxillary from '../../hoc/Auxillary';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;


class Weather extends Component {

  state = {
    location: {},
    currentWeather: {},
    condition: {},
    forecast: []
  }


  componentDidMount(){
    axios.get('https://api.apixu.com/v1/forecast.json?key=' + API_KEY + '&q=Houston&days=7')
    .then(response => {
      this.setState({
        currentWeather: response.data.current,
        location: response.data.location,
        condition: response.data.current.condition,
        forecast: response.data.forecast.forecastday
       })
      console.log(response.data)
    })
  }

  forecastClickedHandler = ( obj1, obj2 ) =>{

    this.setState({
      currentWeather: obj1,
      condition: obj2
    });
      console.log('clicked');
  }


  render(){
    let forecast = this.state.forecast.map(day => {
        let weatherNumbers = {
          temp_f: day.day.avgtemp_f,
          precip_in: day.day.totalprecip_in,
          humidity: day.day.avghumidity,
          wind_mph: day.day.maxwind_mph}

        let newCondition = { icon: day.day.condition.icon, text:day.day.condition.text  }

      return(
        <Forecast
        key={day.date_epoch}
        date={day.date}
        icon={day.day.condition.icon}
        low={day.day.mintemp_f}
        high={day.day.maxtemp_f}
        clicked={()=> this.forecastClickedHandler(weatherNumbers, newCondition) }
      />
    )
    });

    return(
      <Auxillary>

        <div className={styles.ContainerCurrent}>
          <CurrentWeather
            city={this.state.location.name}
            state={this.state.location.region}
            temp={ Math.round( this.state.currentWeather.temp_f ) }
            icon={this.state.condition.icon}
            description={this.state.condition.text}
          />
          <SideWeather
           precipitation={this.state.currentWeather.precip_in}
           humidity={this.state.currentWeather.humidity}
           wind={this.state.currentWeather.wind_mph}
          />
        </div>
        <div className={styles.ContainerForecast}>
          {forecast}
          </div>
      </Auxillary>
    )
  }

}

export default Weather;
