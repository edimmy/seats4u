
import logo from '../logo.svg';
import '../App.css';

import React, { useState } from 'react';
import { Navigate, useNavigate } from "react-router-dom";


function Login() {
  const navigate = useNavigate();

  
const handleSubmit = (event) => {
  
  event.preventDefault(); // Prevents the default form submission behavior
  // Get form data
  const formData = new FormData(event.target);
  // Create an object from the form data
  const formObject = {};
  formData.forEach((value, key) => {
    formObject[key] = value;
  });
  console.log('Form data submitted:', formObject.passwordField.toString());

  if(formObject.passwordField.toString()=== "abc"){
    console.log("authenticated VM");
    navigate('/vmMainScreen');
  }

};

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          List of Venues:
        </p>
        {/* <form id="enterPassword" onSubmit={handleSubmit}>
          <label htmlFor="passwordField">Enter Password:</label>
          <input type="text" id="passwordField" name="passwordField" />
          <input type="submit" />
        </form> */}
      </header>
    </div>
    
  );
}

export default Login;





// import logo from '../logo.svg';
// import '../App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           this is the login page for an admin
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           this is the login page
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
