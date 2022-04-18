import React, { Component } from 'react'
import weather from '../apis/weather'
import Header from './Header'
import Main from './Main'

export class App extends Component {
  state = {
    error: false,
    weather: null
  }
  componentDidMount() {
    weather.get('/weather',{
      params: {
        q: 'kathmandu',
        appid: '8d2de98e089f1c28e1a22fc19a24ef04',
        units: 'metric'
      }
    })
    .then(res => {
      this.setState({weather: res.data})
    })
    .catch(err => {
      this.setState({error: true})
    })
  }

  getWeather = (city) => {
    weather.get('/weather',{
      params: {
        q: city,
        appid: '8d2de98e089f1c28e1a22fc19a24ef04',
        units: 'metric'
      }
    })
    .then(res => {
      this.setState({weather: res.data})
    })
    .catch(err => {
      this.setState({error: true})
    })
  }



  submitCity = (city) => {
    this.setState({error: false})
    this.getWeather(city)
  }
  render() {
    return (
      <div className="d-flex flex-column justify-content-between app">
        <div>
          <Header submitCity={this.submitCity} />
          {this.state.error ? (
            <div className="text-center">
              <p className="mt-5">No city found!</p>
            </div>
          )
          :
          (<Main weather={this.state.weather} />)
          }
        </div>
        <div className="text-center bg-dark text-white py-4">
        Made with ❤ in CITE MERN stack program
        </div>
      </div>
    )
  }
}

export default App