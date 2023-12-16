import '../App.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

import { deleteBlock} from '../controller/deleteBlock';

function DeleteBlock() {

  function handler(){
    deleteBlock()
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Delete Block:
        </p>
          
          <label htmlFor="credential"> Block ID:</label>
          <input type="text" id="idblock" name="idblock" ></input>

          <button onClick={handler}> Submit </button>
          <p id="resultDeleteBlock"></p>
      </header>

      
      
    </div>
    
  );
}


export default DeleteBlock;
