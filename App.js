import './App.css'

import React, { useState } from 'react'
import { getVenues } from './controller/listvenues';
import { createShow } from './controller/createShow';
import { createVenue } from './controller/createVenue';
import { getShows } from './controller/listShows';
import { deleteVenue } from './controller/deleteVenue';


function App() {
  const [redraw, forceRedraw] = React.useState(0);

  React.useEffect(()=>{
  }, [redraw]);

  // this function requests the redraw, and can be passed as an argument to other functions
  const requestRedraw = () => {
    forceRedraw(redraw+1)
  }


  return (
    <div className="App">
      
      <div className="createShow">
      Show Name: <input id="show_name" />
      Venue: <input id="venue_name" />
      Date & Time: <input id="datetime" />
      Price: <input id="price_type" />
      </div>
      
      <div className="createVenue">
      Name: <input id="name" />
      Password: <input id="credential" />
      Left Section Rows: <input id="num_rows0" />
      Left Section Columns:<input id="seats_in_row0" />
      Center Section Rows: <input id="num_rows1" />
      Center Section Columns:<input id="seats_in_row1" />
      Right Section Rows: <input id="num_rows2" />
      Right Section Columns:<input id="seats_in_row2" />
      </div>

      <div className="deleteVenue">
        Delete Venue: <input id="name" />
        Password: <input id="credential" />
      </div>


    <button onClick={(e) => createShow()}>Create Show</button><p></p>
    <button onClick={(e) => getVenues()}>List Venues</button><p></p>
    <button onClick={(e) => getShows()}>List Shows</button><p></p>
    <button onClick={(e) => deleteVenue()}>Delete Venue</button><p></p>
    <button onClick={(e) => createVenue()}>Create Venue</button><p></p>
    <p className="show-list" id="show-list"></p>
    <p className="venue-list" id='venue-list'></p>
    <text className="show" data-testid="show">Show List: </text>
    <text className="venue" data-testid="venue">Venue List: </text>
    <text className="showDisp" data-testid="showDisp">Create a Show: </text>
    
    </div>
  );
}

export default App;

