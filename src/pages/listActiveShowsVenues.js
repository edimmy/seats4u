
import logo from '../logo.svg';
import '../App.css';
//only lists active shows (for consumers)
import { getActiveShowsVenues } from '../controller/listActiveShowsVenues';

import React, { useEffect, useState } from 'react';
import { deactivateShow } from '../controller/deactivateShow';

function ListActiveShowsVenues() {
  useEffect(() => {
    deactivateShow();
    getActiveShowsVenues();
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          List of Active Shows:
          <div id='show-active-list'>
          </div>
        </p>
      </header>
    </div>
  );
}

export default ListActiveShowsVenues;

