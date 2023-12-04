import '../App.css';

import React, { useState, useEffect } from 'react';
import SeatingForm from './setSectionsForCreateVenue';
import createShow from '../controller/createShow'


function CreateShow() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Create Show:
        </p>

        <form onSubmit={createShow}>
        Venue Name: <input type="text" id="venue_name"/>
        Show Name: <input type="text" id="show_name"/>
        DateTime: <input type="text" id="datetime"/>
        Price Type: <input type="text" id="price_type"/>
        <input type="submit"></input>
        
        </form>
        {/* <SeatingForm /> */}
      </header>
    </div>
    
  );
}

export default CreateShow;
