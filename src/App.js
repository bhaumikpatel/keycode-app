import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import KeyCode from './Components/keycode'

class App extends Component {
  render() {
    return (
      <div className="container">
        <KeyCode />
      </div>
    );
  }
}

export default App;
