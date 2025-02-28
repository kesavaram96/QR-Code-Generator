import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import './QrCode.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import { QrCode } from './QrCode';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QrCode />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
