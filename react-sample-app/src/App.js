import React, { Component } from 'react';
// bring in React and Component instance from react
import logo from './logo.svg';
import './App.css';

class Hello extends Component {
  // Components let you split the UI into independent, reusable pieces
  // They accept arbitrary inputs (called "props") and return React elements describing what should appear on the screen.
  constructor (props) {
    // make call to parent class' (Component) constructor// NEED CONSTRUCTOR TO Setting up and modifying state
    super()
    this.state = {
      counter: 0  // initialize this.state.counter to be 0
    }
  }
  handleClick(e) {
    // need some trigger event to change counter
    this.setState({  // setState is inherited from the Component class
      counter: this.state.counter +1
    })
  }
  render() {
    return (
      <div className="App">
        {/*  component must have one parent element-one top level HTML element that holds all of the rest of the HTML in your component.*/}
        <div className="App-header">
        {/*   was  src={logo} */}
          <img src='https://logopond.com/logos/2604a0c4c5ede1bf3f2f999e145ae960.png' className="App-logo" alt="logo" />
          <h2>Hello {this.props.name}!</h2>
          <p>and you are {this.props.age} years old</p>
          {/*  so props CAN be data - but doesn't change until page reloads*/}
          <p>Initial count is {this.state.counter}</p>
          <button onClick={(e) => this.handleClick(e)}>Click  counter</button>
        </div>
        <p className="App-intro">
          Simon says: "To get started, edit <code>src/App.js</code> and save to reload."
        </p>
      </div>
    );
  }  //  render()
}  // class Hello

export default Hello;
