
import logo from '../logo.svg';
import '../App.css';

import React from 'react';
import { showReport } from '../controller/showReport'


function ShowReport() {
  return (
    <div className="App " >

<div id="showreport">
        Show Report: 
        </div>

        <button onClick={showReport}>Generate Show Report</button>

    <table id="report">
    </table>
    </div>
  );
}

export default ShowReport;
