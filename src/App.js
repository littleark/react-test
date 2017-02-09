import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {select} from 'd3-selection';

class App extends Component {

  pizza() {
    let f = () => {
      console.log(`pizza ${2+2}`);
    }

    console.log(select("body"))

    f();
  }
  

  render() {

    //this.pizza();

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
