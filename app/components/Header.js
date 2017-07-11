import React from 'react';
import ZipCode from './ZipCode';

function Header() {
  return (
    <header className='navbar'>
      <h1>Weather App</h1>
      <ZipCode />
    </header>
  )
}

export default Header