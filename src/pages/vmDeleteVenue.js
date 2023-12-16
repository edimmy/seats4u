import '../App.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

import { deleteVenue} from '../controller/deleteVenue';
import { useNavigate } from "react-router-dom";


function DeleteVenue() {
  const navigate = useNavigate();
  function ButtonLink({ to, children }) {
    return <Link to={to}><button>{children}</button></Link>;
  }

  function handler(){
    deleteVenue(navigate)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Confirm Delete Venue:
        </p>
        {/* <form onSubmit={deleteVenue}> */}

          {/* <label htmlFor="name"> Venue Name:</label>
          <input type="text" id="name" name="name"></input> */}
          
          <label htmlFor="credential"> Credential:</label>
          <input type="text" id="credential" name="credential"></input>

          {/* <input type="submit"/>
        </form> */}

        <button onClick={handler}>DELETE</button>

        <ButtonLink to='/vmMainScreen'>Go back</ButtonLink>
      </header>

      
    </div>
    
  );
}


export default DeleteVenue;
