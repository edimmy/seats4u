import '../purchaseSeats.css';

import { getVenues } from '../controller/listvenues';

//import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from "react-router-dom";


function ListVenues() {
  // useEffect(() => {
  //   //sections/seats are fetched, returned in the form
  //   getVenues();
  // }, []);

  // Get the root element
  var r = document.querySelector(':root');

  //in controller, set these values
  // function setCSSVarsForFlexbox() {
  //   // Set the value of variable --blue to another value (in this case "lightblue")
  //     //r.style.setProperty('--blue', 'lightblue');
  //     r.style.setProperty('--numRowsL', 3);
  //     r.style.setProperty('--numRowsL', 3);

  //     r.style.setProperty('--numRowsC', 3);
  //     r.style.setProperty('--numRowsC', 3);
      
  //     r.style.setProperty('--numRowsR', 3);
  //     r.style.setProperty('--numRowsR', 3);
  //   }

  return (
    <div className="App">

    {/* controller will determine these elements */}
      <body>
      <h1> Purchase Seats </h1>
      <div id='container' class="flex-container-main">

        <div id='left' class="flex-container-left" name='section'>
        <div class="flex-item">1</div>
        <div class="flex-item">2</div>
        <div class="flex-item">3</div>
        <div class="flex-item">4</div>
        <div class="flex-item">5</div>
        <div class="flex-item">6</div>
        </div>

        <div id='center' class="flex-container-center" name='section'>
        <div class="flex-item">1</div>
        <div class="flex-item">2</div>
        <div class="flex-item">3</div>
        <div class="flex-item">4</div>
        <div class="flex-item">5</div>
        <div class="flex-item">6</div>
        </div>

        <div id='center' class="flex-container-right" name='section'>
        <div class="flex-item">1</div>
        <div class="flex-item">2</div>
        <div class="flex-item">3</div>
        <div class="flex-item">4</div>
        <div class="flex-item">5</div>
        <div class="flex-item">6</div>
        </div>

        </div>

        </body>

    </div>
  );
}

// // Create a function for setting a variable value
// function myFunction_set() {
//   // Set the value of variable --blue to another value (in this case "lightblue")
//   r.style.setProperty('--blue', 'lightblue');
// }
export default ListVenues;

