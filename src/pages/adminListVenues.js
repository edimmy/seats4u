
import logo from '../logo.svg';
import '../App.css';

import { getVenues } from '../controller/listvenues';

import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from "react-router-dom";


function ListVenues() {
  useEffect(() => {
    getVenues();
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          List of Venues:
          <div id='venue-list'>
          </div>
        </p>
      </header>
    </div>
  );
}

export default ListVenues;

