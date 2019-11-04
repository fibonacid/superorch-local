import React from 'react';
import ReactDOM from 'react-dom';
import App from './react/App';

// Load environment variables
require('dotenv').config();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
