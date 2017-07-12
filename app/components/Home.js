import React from 'react';
import ZipCode from './ZipCode';

function Home(props) {
  return (
    <div className='home-container'>
      <h2 className='header'>Enter a City and State</h2>
      <ZipCode onSubmit={(zipcode) => {
        props.history.push({
          pathname: `/forecast`,
          search: `?city=${zipcode}`
        });
      }}/>
    </div>
  )
}

export default Home