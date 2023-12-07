
import logo from '../logo.svg';
import '../App.css';

//import { createShow } from './controller.createShow'

import { createTable } from '../build-show-table'; 

import React, { useState, useEffect } from 'react';
//import { Navigate, useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';


function ShowReport() {
  const showReports = [
    { name: "Barbie", is_active: "false", seats_sold: 50, seats_remaining: 25, proceeds: 1658 },
    { name: "Barbie 2", is_active: "false", seats_sold: 50, seats_remaining: 25, proceeds: 1658 }
  ];

  useEffect(() => {
    createTable(showReports);
  }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount



  return (
    <div className="App">
    
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Show Report: 
        </p>
    

    <table id="report">
    </table>
    {/* <script src="your-script.js"></script> */}
    </div>
  );
}

function ButtonLink({ to, children }) {
  return <Link to={to}><button>{children}</button></Link>;
}


export default ShowReport;
