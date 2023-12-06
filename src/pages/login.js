
import logo from '../logo.svg';
import '../App.css';

import React, { useState } from 'react';
import { Navigate, useNavigate } from "react-router-dom";

import { loginVM } from '../controller/loginVM';


function Login() {
  const navigate = useNavigate();

  
const handleSubmit = (event) => {
  
  event.preventDefault(); // Prevents the default form submission behavior
  // Get form data
  const formData = new FormData(event.target);
  // Create an object from the form data
  const formObject = {};
  formData.forEach((value, key) => {
    formObject[key] = value;
  });
  console.log('Form data submitted:', formObject.passwordField.toString());

  //const valid = loginVM(formObject.passwordField.toString())
  // if (valid){
  //   console.log("authenticated VM");
  //   navigate('/vmMainScreen');
  // }

  if(formObject.passwordField.toString()=== "abc"){
    console.log("authenticated VM");

    navigate('/vmMainScreen');
  }

};

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          this is the login page for a venue manager
        </p>
        <form id="enterPassword" onSubmit={handleSubmit}>
          <label htmlFor="passwordField">Enter Password:</label>
          <input type="text" id="passwordField" name="passwordField" />
          <input type="submit" />
        </form>
      </header>
    </div>
    
  );
}

export default Login;
