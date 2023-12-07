
import logo from '../logo.svg';
import '../App.css';

//import { createShow } from './controller.createShow'

import React, { useState } from 'react';
//import { Navigate, useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';


function AdminScreen() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Admin: 
        </p>

        <ButtonLink to="/adminListVenues">List Venues</ButtonLink>
        <ButtonLink to="/adminShowReport">Generate Shows Report</ButtonLink>
        <ButtonLink to="/vmDeleteShow">Delete Show</ButtonLink>

        <ButtonLink to="/">Log out</ButtonLink>

      </header>
    </div>
  );
}

function ButtonLink({ to, children }) {
  return <Link to={to}><button>{children}</button></Link>;
}


export default AdminScreen;
