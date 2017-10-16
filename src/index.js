import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Grid from './components/grid';

const App = () => {

return(
    <div className='container-fluid'>
      <Header />
      <Grid />
    </div>
    )

}



ReactDOM.render(<App />, document.getElementById('root'));
