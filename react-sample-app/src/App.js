// src/App.js
// JS for App component
import React, { Component } from 'react';
import './App.css';
import HelloWorld from './HelloWorld.js'

class App extends Component {
  render() {
    // JSX
    return (
      <div className="App">
        {/* JSX */}
        {4+4}
        < HelloWorld />
      </div>
    );
  }
}

export default App;
