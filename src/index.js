import './index.css';
import App from './App';
import React ,{useState}  from 'react';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css'
import { Form, Input } from "semantic-ui-react"
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap'



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


  


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


