import '../App.css';

import  '../createBlock.css';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { createBlock2 } from '../controller/createBlock';

import blockDiagram from '../StageLayoutNumerical.png';


function CreateBlock() {
  const navigate = useNavigate();
  function handler(){
    //loginVM(navigate)
    // [ [start_row, end_row, price], [start_row, end_row, price], ...]
    var block_list_left =  eval("[" + document.getElementById("left").value + "]") ;
    var block_list_center = eval("[" +  document.getElementById("center").value + "]" );
    var block_list_right = eval("[" + document.getElementById("right").value + "]" );


    for(var i = 0; i < block_list_left.length; i++) {
      var block = block_list_left[i];
      var startRow = block[0];
      var endRow = block[1];
      var price = block[2];
      createBlock2("left", startRow, endRow, price);
    }
    for(var i = 0; i < block_list_center.length; i++) {
      var block = block_list_center[i];
      var startRow = block[0];
      var endRow = block[1];
      var price = block[2];
      createBlock2("center", startRow, endRow, price);
    }
    for(var i = 0; i < block_list_right.length; i++) {
      var block = block_list_right[i];
      var startRow = block[0];
      var endRow = block[1];
      var price = block[2];
      createBlock2("right", startRow, endRow, price);
    }

    navigate("/vmMainScreen");

  }

  return (
   
    <div className="App">
      <header className="App-header">
        <p id="b">
          Create Block:
        </p>
         <label htmlFor="show_name_block">Show Name:</label>
          <input type="text" id="show_name_block" name="show_name_block" />
          <img src={blockDiagram} id="blockDiagram" />
          <p>Enter desired blocks for each section in the form [start row, end row, price] </p>
          <p>Example blocks for a section: [1, 5, 50] , [6, 8, 40] , ... </p>
          <div className="flex-container-main">

            <div className="flex-item">
            <label htmlFor="left">Left Section Blocks:</label>
            <input className="inputBlock" type="text" id="left" name="left" placeholder=' [1, 5, 50] , [6 , 8, 40] , ...' />
            </div>

            <div className="flex-item">
            <label htmlFor="center">Center Section Blocks:</label>
            <input className="inputBlock" type="text" id="center" name="center" placeholder=' [1, 5, 50] , [6 , 8, 40] , ...'/>
            </div>

            <div className="flex-item">
            <label htmlFor="right">Right Section Blocks:</label>
            <input className="inputBlock" type="text" id="right" name="right" placeholder=' [1, 5, 50] , [6 , 8, 40] , ...'/>
            </div>

            </div>

          <button className="createBlockButton" onClick={handler} >Submit</button>
      </header>
    </div>
    
  );
}

export default CreateBlock;