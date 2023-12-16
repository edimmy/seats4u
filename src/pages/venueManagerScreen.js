import '../App.css';
import React from 'react';
import { Link } from 'react-router-dom';


function VMScreen() {

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Venue Manager: 
        </p>
        <ButtonLink to="/vmDeleteVenue">Delete Venue</ButtonLink>
        <ButtonLink to="/vmCreateShow">Create Show</ButtonLink>

        <ButtonLink to="/vmActivateShow">Activate Show</ButtonLink>
        <ButtonLink to="/deleteShow">Delete Show</ButtonLink>
        <ButtonLink to="/listShowsVM">List Shows</ButtonLink>

        <ButtonLink to="/vmCreateBlock">Create Show Blocks</ButtonLink>
        <ButtonLink to="/vmDeleteBlock">Delete Show Block</ButtonLink>
        <ButtonLink to="/vmListBlock">List Show Blocks</ButtonLink>

        <ButtonLink to="/">Log Out</ButtonLink>
      </header>
    </div>
  );
}

function ButtonLink({ to, children }) {
  return <Link to={to}><button>{children}</button></Link>;
}


export default VMScreen;
