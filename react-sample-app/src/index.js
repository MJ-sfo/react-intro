// src/index.js
// main file, starting point for your app
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// grab html and render App component in div with id root
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
