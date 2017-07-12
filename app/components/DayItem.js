import React from 'react';
import PropTypes from 'prop-types';
import { getDate } from '../utils/helpers';

function DayItem(props) {
  const timestamp = props.details.dt;
  const icon = props.details.weather[0].icon;

  return (
    <div className='day-container'>
      <img 
        className='weather' src={`../app/img/weather-icons/${icon}.svg`} 
        alt='weather' />
      <h2 className='subheader'>{getDate(timestamp)}</h2>
    </div>
  )
}

DayItem.propTypes = {
  details: PropTypes.object.isRequired
}

export default DayItem