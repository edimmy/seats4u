
import logo from '../logo.svg';
import '../App.css';
import myVenue from "./login.js"

import { createShow } from '../controller/createShow';
import { createVenue } from '../controller/createVenue';
import { deleteVenue } from '../controller/deleteVenue';

import React, { useState } from 'react';
//import { Navigate, useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';


function VMScreen() {
  //const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Venue Manager:
        </p>

        {/* <ButtonLink to="/vmCreateVenue">Create Venue</ButtonLink> */}
        <ButtonLink to="/vmDeleteVenue">Delete Venue</ButtonLink>
        <ButtonLink to="/vmCreateShow">Create Show</ButtonLink>
       

      </header>
      
      
    </div>
    
  );
}

function ButtonLink({ to, children }) {
  return <Link to={to}><button>{children}</button></Link>;
}


export default VMScreen;
