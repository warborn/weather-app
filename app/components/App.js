import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Forecast from './Forecast';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/forecast' component={Forecast} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App