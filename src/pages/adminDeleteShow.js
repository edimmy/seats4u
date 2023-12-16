import '../App.css';

import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import { deleteShowAdmin } from '../controller/deleteShow';


function DeleteShowAdmin() {

  return (
    <div className="App">
      <h1>Admin: Delete show</h1>
      

    <form onSubmit={deleteShowAdmin}>
      <input id="delete_Name_Admin" type="text"/> 
      <input type="submit"/>

      </form>



    </div>
  );


}

export default DeleteShowAdmin;

