import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './App';
import './index.css';

ReactDOM.render(
  //  ReactDOM.render takes the Virtual DOM node created by extends Component (in App.js) and adds it to the actual DOM.
  <Hello />,
  document.getElementById('root')
);
