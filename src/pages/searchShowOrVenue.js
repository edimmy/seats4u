import '../App.css';

import { getVenues } from '../controller/listvenues';

import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from "react-router-dom";


function SearchShowVenue() {
  useEffect(() => {
    getVenues();
  }, []);

  //TODO: replacegetVenues with appropriate controller 
  //

  return (
    <div className="App">

    {/* <form onSubmit={deleteVenue}> */}

    {/* str += venue.name + ' <button type="button"> View </button> <br>' */}
    <form>
    <label htmlFor="name"> Find Show or Venue:</label>
    <input type="text" id="name" name="name"></input>
    <input type="submit"/>   
        <p>
          List of Venues:
          <div id='venue-list'>
          </div>
        </p>
  
    </form>


    </div>
  );


}

export default SearchShowVenue;

