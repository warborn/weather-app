import React, { Component } from 'react';
import { getForecastDetails } from '../utils/api';
import queryString from 'query-string'
import { getForecasts } from '../utils/api';
import ForecastGrid from './ForecastGrid';

class Forecast extends Component {
  constructor(props) {
    super(props);

    this.state = {
      zipcode: null,
      forecast: null
    }
  }

  async componentDidMount() {
    const { city } = queryString.parse(this.props.location.search);
    const forecast = await getForecasts(city);
    this.setState(() => {
      return {
        forecast
      }
    });
  }

  render() {
    const { forecast } = this.state;
    return (
      <div>
        {!forecast 
          ? <p>Loading...</p> 
          : <div>
              <h1 className='forecast-header'>{forecast.city.name}, {forecast.city.country}</h1>
              <ForecastGrid 
                forecasts={forecast.list}
              />
            </div>}
      </div>
    )
  }
}

export default Forecast