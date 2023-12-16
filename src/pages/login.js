import '../App.css';

import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { loginVM } from '../controller/loginVM';

function Login() {
  const navigate = useNavigate();
  function handler(){
    loginVM(navigate)
  }


  return (
   
    <div className="App">
      <header className="App-header">
        <p id="b">
          this is the login page for a venue manager
        </p>
        {/* <form id="enterPassword" onSubmit={handler}> 
          <label htmlFor="passwordField">Enter Password:</label>
          <input type="text" id="passwordField" name="passwordField" />
          <input type="submit" />
        </form> */}
         <label htmlFor="passwordField">Enter Password:</label>
          <input type="text" id="passwordField" name="passwordField" />
          <button onClick={handler}>Submit</button>
      </header>
    </div>
    
  );
}

export default Login;