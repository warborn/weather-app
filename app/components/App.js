import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Forecast from './Forecast';
import Detail from './Detail';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route component={Header} />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />} />
              <Route path='/forecast' component={Forecast} />
              <Route path='/details/:city' component={Detail} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App