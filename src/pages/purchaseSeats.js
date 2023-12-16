//import '../purchaseSeats.css';

import { showAvailableSeats } from '../controller/showAvailableSeats';
import { purchaseSeats, purchaseSeats2 } from '../controller/purchaseSeats';
import { deactivateShow } from '../controller/deactivateShow';
import { useNavigate } from "react-router-dom";


function PurchaseSeats() {
  // Get the root element
  const navigate = useNavigate();
  function handler(){
    // var seatInput =  [ eval(document.getElementById("idseat").value) ]
    var seatInput =   document.getElementById("idseat").value.split(",");

    var everyPurchaseSuccessful = true;

    for (const seatID of seatInput) {
      deactivateShow();
      //make sure each seat purchase successful
      everyPurchaseSuccessful = everyPurchaseSuccessful && purchaseSeats2(seatID);
    }

    if(everyPurchaseSuccessful){
      alert("Ticket Purchase!");
      navigate("/")
    }

  }

  return (
    <div className="App">
      <h1> Purchase Seats </h1>
      {/* <form onSubmit={purchaseSeats}> */}
      <p>Can enter multiple seatids separated by commas eg: 57, 63, 20 </p>
        <label htmlFor="idseat">Seat ids to Purchase:</label>
        <input type="text" id="idseat" name ="idseat"></input>
        {/* <input type="submit"/> */}
        <button onClick={handler}> Buy Seats </button>
      {/* </form> */}
    </div>
  );
}

export default PurchaseSeats;