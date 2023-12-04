import React, { useState } from 'react';
//import React, { useState } from 'react';

const showForm = () => {
  const [formData, setFormData] = useState({
    showName: '',
    venueName: '',
    date: '',
    time: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation logic here
    console.log('Form submitted:', formData);
    ///do push to database stuff here
    
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Side Left Section */}
      <div>
      <label htmlFor="showName">Venue Name:</label>
      <input type="text" 
      name="showName"
      id="venueNamshowName"
      value={formData.showName} 
      onChange={handleChange}
      required/>

      <label htmlFor="venueName">Venue Name:</label>
      <input type="text" 
      name="venueName"
      id="venueName"
      value={formData.venueName} 
      onChange={handleChange}
      required/>

      <label htmlFor="date">Date:</label>
        <input type="text" 
        name="date"
        id="date"
        value={formData.date} 
        onChange={handleChange}
        required/>


      <label htmlFor="time">Date:</label>
        <input type="time" 
        name="time"
        id="time"
        value={formData.time} 
        onChange={handleChange}
        required/>

      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default showForm;