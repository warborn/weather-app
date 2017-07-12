import React, { Component } from 'react';
import { getForecastDetails } from '../utils/api';
import queryString from 'query-string'
import { getForecast } from '../utils/api';
import ForecastGrid from './ForecastGrid';

class Forecast extends Component {
  constructor(props) {
    super(props);

    this.state = {
      forecast: null,
      loading: true
    }

    this.handleDayItemClick = this.handleDayItemClick.bind(this);
    this.makeRequest = this.makeRequest.bind(this);
  }

  componentDidMount() {
    this.city = queryString.parse(this.props.location.search).city;
    this.makeRequest(this.city);
  }

  componentWillReceiveProps(nextProps) {
    this.city = queryString.parse(nextProps.location.search).city;
    this.makeRequest(this.city);
  }

  async makeRequest(city) {
    console.log(city);
    this.setState(() => {
      return {
        loading: true,
      }
    });

    const forecast = await getForecast(city);
    this.setState(() => {
      return {
        forecast,
        loading: false
      }
    });
  }

  handleDayItemClick(day) {
    this.props.history.push({
      pathname: `/details/${this.city}`,
      state: day
    });
  }

  render() {
    const { loading, forecast } = this.state;
    return (
      <div>
        {loading 
          ? <p className='forecast-header'>Loading...</p> 
          : <div>
              <h1 className='forecast-header'>{forecast.city.name}, {forecast.city.country}</h1>
              <ForecastGrid 
                onDayItemClick={this.handleDayItemClick}
                list={forecast.list}
              />
            </div>}
      </div>
    )
  }
}

export default Forecast