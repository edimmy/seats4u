import '../App.css';

import { activateShow } from '../controller/activateShow';

import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from "react-router-dom";


function ActivateShow() {
  const navigate = useNavigate();

  function handler(){
    activateShow(navigate)
  }

  return (
    <div className="App">
      <h1>Activate show</h1>

    <label htmlFor="show_name_activate"> Show To Activate:</label>
    <input type="text" id="show_name_activate" name="show_name_activate"></input>
    <button onClick={handler}>Activate</button>    

    </div>
  );


}

export default ActivateShow;

