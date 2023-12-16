import '../App.css';

import { searchShowsAndVenues } from '../controller/searchShowsAndVenues';

import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from "react-router-dom";

import { deactivateShow } from '../controller/deactivateShow';

function SearchShowVenue() {
  const navigate = useNavigate();

  function handleRedirect(){
    //navigate('/purchaseSeats');
    deactivateShow();
    navigate('/showAvailableSeats');
  }

  function toggleShowVenue(){
    var element = document.getElementById("showVenueToggle");
    var content = element.innerText;
    if (content == "Searching by Show"){
      console.log("Switching from show -> venue");
      element.innerHTML = "Searching by Venue";
    }
    else {console.log("Switching from venue -> show");
    element.innerHTML = "Searching by Show";
      }
  }

  return (
    <div className="App">

    <label htmlFor="showVenueToggle"> Click to Toggle Between Search Types: </label>
    <button id="showVenueToggle" onClick={toggleShowVenue}> Searching by Show </button>
    <form onSubmit={(event) => searchShowsAndVenues(event)}>
    <label htmlFor="name"> Find Show or Venue:</label>
    <input type="text" id="search" name="search"></input>
    <input type="submit"/>   
    </form>

    <form id="resultsAndRedirect" onSubmit={handleRedirect}>
        <p>
          Results:
          <div id="result">
          </div>
        </p>
    </form>
    </div>
  );
}

export default SearchShowVenue;

