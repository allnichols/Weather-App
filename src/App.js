import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

class App extends Component {

  componentDidMount(){
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=Houston&appid=' + API_KEY)
    .then(response => {
      console.log(response);
    })
  }

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
