import React, { useState } from 'react';
//import React, { useState } from 'react';
import { createVenue } from '../controller/createVenue';

const SeatingForm = () => {
  // const [formData, setFormData] = useState({
  //   venueName: '',
  //   sideLeftSeats: '',
  //   sideLeftRows: '',
  //   centerSeats: '',
  //   centerRows: '',
  //   sideRightSeats: '',
  //   sideRightRows: '',
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Add validation logic here
  //   console.log('Form submitted:', formData);
  //   ///do push to database stuff here
    
  // };

  return (
    <form onSubmit={createVenue}>
      <input type="text" id="name" name="Venue Name"></input>
      {/* Side Left Section */}
      <div>
      <h2> Left: </h2>  
      <input type="text" id="num_rows0" name="Num Rows"></input>
      <input type="text" id="seats_in_row0" name="Seats in Row"></input>
      </div>
      {/* Center Section */}
      <div>
      <h2> Center: </h2>  
      <input type="text" id="num_rows1" name="Num Rows"></input>
      <input type="text" id="seats_in_row1" name="Seats in Row"></input>
      </div>
      {/* Side Right Section */}

      <div>
      <h2> Right: </h2>  
      <input type="text" id="num_rows2" name="Num Rows"></input>
      <input type="text" id="seats_in_row2" name="Seats in Row"></input>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SeatingForm;

    // <form onSubmit={handleSubmit}>
    //   {/* Side Left Section */}
    //   <div>
    //   <label htmlFor="venueName">Venue Name:</label>
    //   <input type="text" 
    //   name="venueName"
    //   id="venueName"
    //   value={formData.venueName} 
    //   onChange={handleChange}
    //   required/>

    //     <h2>Side Left</h2>
    //     <label htmlFor="sideLeftSeats">Seats per Row:</label>
    //     <input
    //       type="number"
    //       name="sideLeftSeats"
    //       id="sideLeftSeats"
    //       value={formData.sideLeftSeats}
    //       onChange={handleChange}
    //       required
    //       min="1" // Set a minimum value for seats per row
    //       max="26"
    //     />

    //     <label htmlFor="sideLeftRows">Number of Rows:</label>
    //     <input
    //       type="number"
    //       name="sideLeftRows"
    //       id="sideLeftRows"
    //       value={formData.sideLeftRows}
    //       onChange={handleChange}
    //       required
    //       min="1" // Set a minimum value for the number of rows
    //       max="26"
    //     />
    //   </div>

    //   {/* Center Section */}
    //   <div>
    //     <h2>Center</h2>
    //     <label htmlFor="centerSeats">Seats per Row:</label>
    //     <input
    //       type="number"
    //       name="centerSeats"
    //       id="centerSeats"
    //       value={formData.centerSeats}
    //       onChange={handleChange}
    //       required
    //       min="1" // Set a minimum value for seats per row
    //       max="26"
    //     />

    //     <label htmlFor="centerRows">Number of Rows:</label>
    //     <input
    //       type="number"
    //       name="centerRows"
    //       id="centerRows"
    //       value={formData.centerRows}
    //       onChange={handleChange}
    //       required
    //       min="1" // Set a minimum value for the number of rows
    //       max="26"
    //     />
    //   </div>

    //   {/* Side Right Section */}
    //   <div>
    //     <h2>Side Right</h2>
    //     {/* Similar structure for side right section */}
    //   </div>

    //   <button type="submit">Submit</button>
    // </form>