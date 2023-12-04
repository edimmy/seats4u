import logo from '../logo.svg';
import '../App.css';
import React from 'react';
import myVenue from "./login.js"
import { getVenues } from "../controller/listvenues.js";
import { deleteVenue } from '../controller/deleteVenue.js';

function DeleteVenueMain() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      
      <body>
      <form onSubmit={deleteVenue}>
        <label htmlFor="name">Venue Name:</label>
        <input type="text" id="name" name="name" />
        
        <label htmlFor="credential">Credential:</label>
        <input type="text" id="credential" name="credential" />
        
        <input type="submit" value="Submit" />
      </form>
      </body>

    </div>
  );
}

export default DeleteVenueMain;