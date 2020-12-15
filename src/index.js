import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import 'font-awesome/css/font-awesome.css'
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable'
import 'react-app-polyfill/ie9';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

