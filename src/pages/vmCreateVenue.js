import '../App.css';

import React, { useState } from 'react';
//import { Navigate, useNavigate } from "react-router-dom";
import SeatingForm from './setSectionsForCreateVenue';
import { createVenue } from '../controller/createVenue';


function CreateVenue() {
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
  <div>
  <h1> Venue Name: </h1> 
  <form onSubmit={createVenue}>
    <h2> Venue Name: </h2>  
    <input type="text" id="name" name="name"></input>
    <h2> Credential: </h2> 
    <input type="text" id="credential" name="credential"></input>
    {/* Side Left Section */}
    <div>
    <h2> Left: </h2>  
    <label for="num_rows0">Num rows</label>
    <input type="text" id="num_rows0" name="Num Rows"></input>
    <label for="seats_in_row0">Seats in row</label>
    <input type="text" id="seats_in_row0" name="Seats in Row"></input>
    </div>
    {/* Center Section */}
    <div>
    <h2> Center: </h2>  
    <label for="num_rows1">Num rows</label>
    <input type="text" id="num_rows1" name="Num Rows"></input>
    <label for="seats_in_row1">Seats in row</label>
    <input type="text" id="seats_in_row1" name="Seats in Row"></input>
    </div>
    {/* Side Right Section */}

    <div>
    <h2> Right: </h2>  
    <label for="num_rows2">Num rows</label>
    <input type="text" id="num_rows2" name="Num Rows"></input>
    <label for="seats_in_row2">Seats in row</label>
    <input type="text" id="seats_in_row2" name="Seats in Row"></input>
    </div>

    <button type="submit">Submit</button>
  </form>
  </div>
);
}

export default CreateVenue;
