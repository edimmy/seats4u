import '../App.css';

import React, { useState } from 'react';
//import { Navigate, useNavigate } from "react-router-dom";
import SeatingForm from './setSectionsForCreateVenue';


function createVenue() {
  //const navigate = useNavigate();
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

  if(formObject.passwordField.toString()=== "abc"){
    console.log("authenticated VM");
    //navigate('/vmMainScreen');
    //
  }

};

  return (
    <div className="App">
      <header className="App-header">
        <p>
          this is the createVenue page
        </p>

        <SeatingForm />
        {/* <form id="enterPassword" onSubmit={handleSubmit}>
          <label htmlFor="passwordField">Enter Password:</label>
          <input type="text" id="passwordField" name="passwordField" />
          <input type="submit" />
        </form> */}
      </header>
    </div>
    
  );
}

export default createVenue;
