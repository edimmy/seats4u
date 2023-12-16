
import logo from '../logo.svg';
import '../App.css';

//import { getActiveShowsVenues } from '../controller/listActiveShowsVenues';

import React, { useEffect, useState } from 'react';
import { getShows} from '../controller/listShows';
import { deactivateShow } from '../controller/deactivateShow';

function ListShows() {

  function handler(){
    deactivateShow()
    getShows()
  }

  return (
    <div className="App">
      <header className="App-header">
      <label htmlFor="passwordListShows">Credential:</label>
        <input type="text" id="passwordListShows"></input>
        <button onClick={handler}>List Shows</button>
          <div id="all_constants">
          </div>
          
      </header>
    </div>
  );
}

export default ListShows;

