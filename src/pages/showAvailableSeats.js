import { showAvailableSeats } from '../controller/showAvailableSeats';
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

import { deactivateShow } from '../controller/deactivateShow';
import blockDiagram from '../StageLayoutNumerical.png';

function showSeats() {
  // Get the root element

  function showSeats(event) {
    event.preventDefault(); 

    deactivateShow()
    showAvailableSeats()
  }

  return (
    <div className="App">
     
      <h1> Available Seats </h1>
      <img src={blockDiagram} id="blockDiagramSeats" />
      <h2>TO PURCHASE: Write down seatIDs of desired seats</h2>
  

      <label for="cars">Sort available seats by:</label>
      <select name="sortBy" id="sortBy">
        <option value="1">Section</option>
        <option value="2">Row (ascending) </option>
        <option value="0">Price (descending)</option>
      </select>
        
        <form id="form" onSubmit={showSeats}>
        <label htmlFor="Show_Name"> Full Show Name:</label>
      <input type="test" id="Show_Name" name="Show_Name"></input>
      <input id="submit" type="submit"/>
      </form>
      
      <p id="resultAvailable"> 
        </p>

        <ButtonLink to="/purchaseSeats">Go to Purchase Seats</ButtonLink>

    </div>


  );
}

function ButtonLink({ to, children }) {
  return <Link to={to}><button>{children}</button></Link>;
}


export default showSeats;

