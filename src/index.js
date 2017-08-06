import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import LandDevelopmentHandbook from './components/LandDevelopmentHandbook/LandDevelopmentHandbook';
import './styles/main.scss';

ReactDOM.render(
  <BrowserRouter>
    <LandDevelopmentHandbook />
  </BrowserRouter>,
  document.getElementById('root'),
);
