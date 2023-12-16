import '../App.css';

import React, { useState, useEffect } from 'react';
import createShow from '../controller/createShow'
import { useNavigate } from "react-router-dom";


function CreateShow() {
  const navigate = useNavigate();

  function handlerShow(){
    createShow(navigate)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Create Show:
        </p>
        Show Name: <input type="text" id="show_name"/>
        DateTime YYYY-MM-DD HH:MI:SS (24 hour): <input type="text" id="datetime" placeholder="YYYY-MM-DD HH:MI:SS (24 hour)" />
        Credential: <input type="text" id="credential" placeholder="credential" />
        Price: <input type="text" id="seat_price" />

        <button onClick={handlerShow}>Submit</button>
  
      </header>
    </div>
    
  );
}

export default CreateShow;
