import '../App.css';
import React, { useEffect, useState } from 'react';
import { listBlocks } from '../controller/listBlocks';

function ListBlock() {

  function handler(){
    listBlocks();
  }

  return (
    <div className="App">
      <header className="App-header">
        <h4>List Blocks:</h4>

<label htmlFor="showname"> Show Name:</label>
      <input type="text" id="showname" name="showname"></input>
      <button onClick={handler}>List Blocks</button> 
      <div id="resultBlock">
          </div>
      </header>

    </div>
  );
}

export default ListBlock;

