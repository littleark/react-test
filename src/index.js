import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import Chart from './components/Chart';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


new Chart(["yo"],{container:"#root"})