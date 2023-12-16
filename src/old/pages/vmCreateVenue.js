import '../App.css';

import React, { useState } from 'react';
//import { Navigate, useNavigate } from "react-router-dom";
import SeatingForm from './setSectionsForCreateVenue';
import { createVenue } from '../controller/createVenue.js';


function createVenue0() {
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
        <form id="createVenueForm" onSubmit={handleSubmit}>
        <SeatingForm />
        {/* <form id="enterPassword" onSubmit={handleSubmit}>
          <label htmlFor="passwordField">Enter Password:</label>
          <input type="text" id="passwordField" name="passwordField" />
          <input type="submit" />
        </form> */}
        <label htmlFor="enterPassword">Password</label>
        <div className="inputVenueName">
          Name Venue: <input id="name" />
          </div>

          <div className="inputCredential">
          Venue Credential: <input id="credential" />
          </div>

          <div className="leftNumRows">
          Left Number of Rows: <input id="num_rows0" />
          </div>

          <div className="centerNumRows">
          Center Number of Rows: <input id="num_rows1" />
          </div>

          <div className="rightNumRows">
          Right Number of Rows: <input id="num_rows2" />
          </div>

          <div className="leftNumSeats">
          Left Number of Seats: <input id="seats_in_row0" />
          </div>

          <div className="centerNumSeats">
          Center Number of Seats: <input id="seats_in_row1" />
          </div>

          <div className="rightNumSeats">
          Right Number of Seats: <input id="seats_in_row2" />
          </div>


      </form>
      </header>
      <button onClick={createVenue()}>Create Venue</button>

    </div>
    
  );
}

export default createVenue0;
//Example of text fields needed for deleteVeneue:
{/* <div className="deleteVenue">
        Delete Venue: <input id="name" />
        Password: <input id="credential" />
      </div> */}

      /* Notice that ID's in the text fields and deleteVenue.js are the same*/
      
      // let name = document.getElementById("name")
      // let credential = document.getElementById("credential") */