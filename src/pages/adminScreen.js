
import logo from '../logo.svg';
import '../App.css';

import React from 'react';
import { Link } from 'react-router-dom';


function AdminScreen() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Admin: 
        </p>

        <ButtonLink to="/adminListVenues">List Venues</ButtonLink>
        <ButtonLink to="/adminShowReport">Generate Shows Report</ButtonLink>
        <ButtonLink to="/deleteShowAdmin">Delete Show</ButtonLink>

        <ButtonLink to="/">Log out</ButtonLink>

      </header>
    </div>
  );
}

function ButtonLink({ to, children }) {
  return <Link to={to}><button>{children}</button></Link>;
}


export default AdminScreen;
