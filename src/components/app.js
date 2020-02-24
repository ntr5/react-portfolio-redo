import React, { Component } from 'react';

import PortfolioContainer from './portfolio/portfolio-container';
import NavigationContainer from './navigation/naviation-container'
import moment from 'moment';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <NavigationContainer />
        <h1>NaTHaN StoRRs Portfolio</h1>
        <div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
        <PortfolioContainer />
      </div>
    );
  }
}
