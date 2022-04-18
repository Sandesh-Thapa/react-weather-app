import React from 'react'

function Main({weather}) {
  if (weather){
    return (
      <div className="text-center">
          <h4 className="mt-5">City: {weather.name}</h4>
          <h4>{weather.main.temp}°C</h4>
          <p>Max: {weather.main.temp_max}°C | Min: {weather.main.temp_min}°C</p>
          <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="Weather Icon"/>
          <p>{weather.weather[0].main}, {weather.weather[0].description}</p>
      </div>
    )
  }
  return (
    <div className="text-center">
      <p className="mt-5">Loading...</p>
    </div>
  )
}

export default Main