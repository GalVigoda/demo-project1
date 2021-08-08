import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function OurApp() {
  return React.createElement("div", null, [
        React.createElement("p", null, `The current time is ${new Date().toLocaleString()}.`),
 
  ])
}
setInterval(function() {
  ReactDOM.render(React.createElement(OurApp), document.querySelector("#root1"))
}, 1000);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),

);


//const element = <h1>Hello, world</h1>;
//ReactDOM.render(element, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


