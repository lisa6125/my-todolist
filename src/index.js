import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home'; //無須寫index.js，會直接判斷

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);
