import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './App.js';
import './index.css';

ReactDOM.render(
  //  ReactDOM.render takes the Virtual DOM node created by extends Component (in App.js) and adds it to the actual DOM.
  <Hello name={"Ben Brunner"}  age={70}  />,
  // this sends data (a name) to component (a class)
  document.getElementById('root')
);

// no class, so no export?
