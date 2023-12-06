import '../App.css';
import React from 'react';
import { purchaseSeats } from '../controller/purchaseSeats';
import { showAvailableSeats } from '../controller/showAvailableSeats';
import SeatingForm from './setSectionsForCreateVenue';

//first get a list of the available seats for a given show
function listSeats(show) {
    return(
        <div>
            <header>
                <img src={logo} className='App-logo' alt='logo'/>
                <p>
                    Available Seats:
                </p>
                <button onClick={(e) => showAvailableSeats(show)}>show available seats</button>
            </header>
        </div>
    );
}

//after clicking purchase, mark a seat as unavailable
function purchase(seat){
    return(
        <div>
            <header>
                <img src={logo} className='App-logo' alt='logo'/>
                <p>
                    Purchase Seats
                </p>
                <button onClick={(e) => purchaseSeats(seat)}>Purchase</button>
            </header>
        </div>
    )
}