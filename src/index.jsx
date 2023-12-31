import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './scss/base/_reset.scss'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

root.render(
  <React.StrictMode>
    {app}
  </React.StrictMode>
);

reportWebVitals();
