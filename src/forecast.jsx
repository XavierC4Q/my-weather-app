import React from 'react'
import blizzard from './icons/blizzard.png'
import './App.css'

const Forecast = ({info}) => {
  const weatherImage = require(`./icons/${info.icon}`)
  return (<div className='forecast-wrapper'>
    <h3>{info.date.slice(0, 10)}</h3>
    <div>
      <img className='weather-image' src={weatherImage} alt='weather-pic'></img>
    </div>
    <div>
      <div>
        <p className='avg'>Average: {info.avgTemp}°</p>
      </div>
      <div>
        <p className='low'>Low: {info.minTemp}°</p>
      </div>
      <div>
        <p className='high'>High: {info.maxTemp}°</p>
      </div>
    </div>
  </div>)
}

export default Forecast
