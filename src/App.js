import logo from './logo.svg';
import './App.css';
//import React from 'react';
//import ReactDOM from 'react-dom';

function App() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          
         Please enter the number for Calling: (+972524215556)
         <form>
         <input
          type="textdd"
        />
      </form>
      </p>
        <a
          className="App-link"
          href="index.html"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
        >
         click here to call
        </a>
        Twilio.Device.setup(token);
        
       {/* . React.createElement("p", null, `The current time is ${new Date().toLocaleString()}.`   */}
       
      </header>
      
    </div>
    
  );
}

export default App;
// setInterval(function() {
//   ReactDOM.render(React.createElement(App), document.querySelector("#app"))
// },1000)

// function OurApp() {
//   return React.createElement("div", null, [
//     React.createElement("h1", null, "Our Amazing App Header"),
//     React.createElement("p", null, `The current time is ${new Date().toLocaleString()}.`),
//     React.createElement("small", null, "Copyright Footer Text")
//   ])
// }

// setInterval(function() {
//   ReactDOM.render(React.createElement(OurApp), document.querySelector("#app"))
// }, 1000)



// class MyForm extends React.Component {
//   render() {
//     return (
//       <form>
//         <h1>Hello</h1>
//         <p>Enter your name:</p>
//         <input
//           type="text"
//         />
//       </form>
//     );
//   }
// }
// ReactDOM.render(<MyForm />, document.getElementById('root'));



