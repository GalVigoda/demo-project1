import logo from './logo.svg';
import './App.css';
import React ,{useState}  from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Form, Input } from "semantic-ui-react"
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap'

function App() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  //export const numberForm = () => {  //   fix it!! 'import' and 'export' may only appear at the top level
   // const [value_number] = useState('');
  
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>          
          Please enter the number for Calling:
          <Form>
            <Form.Field>
              <Input
              placeholder='e.g:     +972524215556'
              //value={value_number}
              // onChange={e=> setTitle(e.target.value)}
              />
            </Form.Field>
            <Form.Field> 
            <Button>click to call</Button>
            {/* <Button on onClick={async()=> {
              const number={value_number}
              const response= await featch('/send_number', {
                method: 'POST',
                headers:{'Content-Type': 'application/json'
                },
                body: JSON.stringify(number)
              })
              if (response.ok){
                console.log("response work for send post")
              }
            }}
              >Click me</Button> */}
            </Form.Field>
      
            </Form>
          </p>
  {/* React.createElement("p", null, `The current time is ${new Date().toLocaleString()}.`   */}
          
        </header>
        
      </div>
      
    );
  //}
  
}
export default App;

