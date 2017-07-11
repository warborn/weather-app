import React, { Component } from 'react';
import Header from './Header';
import ZipCode from './ZipCode';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='container'>
          <div className='home-container'>
            <h2 className='header'>Enter a City and State</h2>
            <ZipCode />
          </div>
        </div>
      </div>
    )
  }
}

export default App