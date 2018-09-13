import React from 'react';
import axios from 'axios'
import './App.css'
import Forecast from './forecast'

const apiQuery = 'https://api.aerisapi.com/forecasts/new york city, ny?client_id=zURm8TiM2PdIgoRmul2IL&client_secret=1fUFp0cH18zSNM4UMBuoYGkM8yVxEBozQzp2ofj8'

const weatherRequest = async () => {
  let getForecast = await axios.get(apiQuery)
  return getForecast
}

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      forecast: [],
      celsius: false
    }
  }

  componentDidMount() {
    weatherRequest().then(res => {
      const response = res.data.response[0].periods
      this.setState({
        forecast: [...response].reverse()
      })
    })
  }

  toggleCelsius = () => {
    const {celsius} = this.state
    this.setState({
      celsius: !celsius
    })
  }

  render() {
    const {forecast, celsius} = this.state
    return (<div className='app-wrapper'>
      <div className='weather-head'>
        <h1 className='welcome-header'>Seven Day Forecast for New York City</h1>
        <p>
          <h3>{celsius ? 'Temperatures in celsius' : 'Temperatures in fahrenheit'}</h3>
        </p>
        <button onClick={this.toggleCelsius} className='toggle-btn'>{celsius ? 'Change to fahrenheit' : 'Change to celsius'}</button>
      </div>
      <div className='all-forecast'>
        {
          forecast.map(info => {
            let weatherInfo = {
              date: info.dateTimeISO,
              maxTemp: celsius
                ? info.maxTempC
                : info.maxTempF,
              minTemp: celsius
                ? info.minTempC
                : info.minTempF,
              avgTemp: celsius
                ? info.avgTempC
                : info.avgTempF,
              icon: info.icon
            }
            return (<Forecast info={weatherInfo}/>)
          })
        }
      </div>
    </div>);
  }
}

export default App;
