import React from 'react';
import DayItem from './DayItem';
import { convertTemp } from '../utils/helpers';

function Detail(props) {
  const day = props.location.state;
  return (
    <div>
      <DayItem 
        details={day}
      />
      <div className="description-container">
        <p>{day.city}</p>
        <p>{day.weather[0].description}</p>
        <p>min temp: {convertTemp(day.temp.min)} degrees</p>
        <p>max temp: {convertTemp(day.temp.max)} degrees</p>
        <p>humidity: {day.humidity}</p>
      </div>
    </div>
  )
}

export default Detail