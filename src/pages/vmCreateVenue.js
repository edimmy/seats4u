import '../App.css';

import React, { useState, useEffect } from 'react';
import { createVenue } from '../controller/createVenue';

function CreateVenue() {

  const [generatedPass, setGenerated] = useState(Math.random().toString(36).slice(-8));
  // const [generatedPass, setGenerated] = useState(0);
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    document.getElementById("credential").value = generatedPass;
  },[generatedPass]);

return (
  <div>
  <h1> Venue Name: </h1> 
  <form onSubmit={createVenue}>
    <h4> Venue Name: </h4>  
    <input type="text" id="name" name="name"></input>
    <h4> Auto-Generated Credential:   </h4> 
    <input type="text" id="credential" name="credential" value={setGenerated} readonly></input>

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
