import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Grid from './components/grid';

class App extends Component{
  // constructor(props){
  //     super(props)
  // }

  render(){

    return(
    <div className='container-fluid'>
      <Header />
      <Grid />
    </div>
    )
  }

}



ReactDOM.render(<App />, document.getElementById('root'));
