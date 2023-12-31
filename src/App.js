import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import LoginAdmin from "./pages/loginAdmin";
import Layout from "./pages/layout";
import VMmain from "./pages/venueManagerScreen";
import VMCreateVenue from "./pages/vmCreateVenue";
import AdminListVenues from "./pages/adminListVenues"

function App() {
  const [authenticated, changeUserType] = React.useState(0);  
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="loginAdmin" element={<LoginAdmin />} />
            <Route path="vmMainScreen" element={<VMmain />} />
            <Route path="vmCreateVenue" element={<VMCreateVenue />} />
            <Route path="adminListVenues" element={<AdminListVenues />} />
            
        </Route>
      </Routes>
    </BrowserRouter>


      </header>
    </div>
  );
}

export default App;
