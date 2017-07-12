import React from 'react';
import CityInput from './CityInput';

function Home(props) {
  return (
    <div className='home-container'>
      <h2 className='header'>Enter a City and State</h2>
      <CityInput onSubmit={(city) => {
        props.history.push({
          pathname: `/forecast`,
          search: `?city=${city}`
        });
      }}/>
    </div>
  )
}

export default Home