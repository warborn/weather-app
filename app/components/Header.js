import React from 'react';
import { Link } from 'react-router-dom';
import CityInput from './CityInput';

function Header(props) {
  return (
    <header className='navbar'>
      <h1>
        <Link
          className='title'
          to={{pathname: '/'}}>
            Weather App
        </Link>
      </h1>
      <CityInput onSubmit={(city) => {
        props.history.push({
          pathname: `/forecast`,
          search: `?city=${city}`
        });
      }}/>
    </header>
  )
}

export default Header