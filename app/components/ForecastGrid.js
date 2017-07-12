import React from 'react';
import PropTypes from 'prop-types';
import DayItem from './DayItem';

function ForecastGrid({ forecasts }) {
  return (
    <div className='forecast-container'>
      {forecasts.map((forecast) => {
        return (
          <DayItem 
            key={forecast.dt} 
            details={forecast}
          />
        )
      })}
    </div>
  )
}

ForecastGrid.propTypes = {
  forecasts: PropTypes.array.isRequired
}

export default ForecastGrid