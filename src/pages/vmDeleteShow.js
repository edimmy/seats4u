import '../App.css';

import { getVenues } from '../controller/listvenues';

import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from "react-router-dom";


function DeleteShow() {

  return (
    <div className="App">
      <h1>Delete show</h1>
    <form>
    {/* <label htmlFor="credential"> Credential:</label>
    <input type="text" id="credential" name="credential"></input> */}

    <label htmlFor="name"> Show Name:</label>
    <input type="text" id="name" name="name"></input>

    <input type="submit"/>    
    </form>
    </div>
  );


}

export default DeleteShow;

