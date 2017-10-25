import React, { Component } from 'react';
import Header from './header';
import Grid from '../containers/grid';


export default class App extends Component {
  render() {
    return(
        <div className='container-fluid'>
          <Header />
          <Grid />
        </div>
        )
  }
}
