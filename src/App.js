import React, { Component } from 'react';
import './App.css';
import Landing from './Landing/Landing'

class App extends Component {

  render () {
    // const style = {
    //   backgroundColor: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer'
    // };

    return (
      <div className="App">
        <Landing /> 
      </div>
    );
  }
}

export default App;
