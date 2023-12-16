import '../App.css';

import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import { deleteShow } from '../controller/deleteShow';

function DeleteShow() {

  return (
    <div className="App">
      <h1>Delete show</h1>

    <form onSubmit={deleteShow}>
      <input id="delete_Name" type="text"/> 
      <input type="submit"/>

      </form>



    </div>
  );


}

export default DeleteShow;

