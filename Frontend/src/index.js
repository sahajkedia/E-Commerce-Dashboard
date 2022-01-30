import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import VedxApp from './vedx';
import VedxApp2 from './Ved2';
import AddConsumer from './AddConsumer';

ReactDOM.render(
  <React.StrictMode>
    {/* <VedxApp2 /> */}
    {/* <VedxApp /> */}
    <AddConsumer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
