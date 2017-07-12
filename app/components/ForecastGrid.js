import React from 'react';
import PropTypes from 'prop-types';
import DayItem from './DayItem';

function ForecastGrid({ list, onDayItemClick }) {
  return (
    <div className='forecast-container'>
      {list.map((forecast) => {
        return (
          <DayItem 
            key={forecast.dt} 
            details={forecast}
            onClick={() => onDayItemClick(forecast)}
          />
        )
      })}
    </div>
  )
}

ForecastGrid.propTypes = {
  list: PropTypes.array.isRequired,
  onDayItemClick: PropTypes.func.isRequired
}

export default ForecastGrid