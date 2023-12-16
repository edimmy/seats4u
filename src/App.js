import logo from './logo.svg';
import './App.css';
import React from 'react';
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import LoginAdmin from "./pages/loginAdmin";
import Layout from "./pages/layout";
import VMmain from "./pages/venueManagerScreen";
import VMCreateVenue from "./pages/vmCreateVenue";
import AdminListVenues from "./pages/adminListVenues"
import DeleteVenue from './pages/vmDeleteVenue';
import CreateShow from './pages/vmCreateShow'
import SearchShowOrVenue from './pages/searchShowOrVenue'
import PurchaseSeats from './pages/purchaseSeats'
import ActivateShow from './pages/vmActivateShow'
import DeleteShow from './pages/vmDeleteShow'
import AdminMain from './pages/adminScreen'
import AdminShowReport from './pages/adminShowReport'
import ListShowsVM from './pages/listShows';
import ShowAvailableSeats  from './pages/showAvailableSeats';
import ListActiveShowsVenues from './pages/listActiveShowsVenues';
import VMCreateBlock from './pages/vmCreateBlock';
import VMDeleteBlock from './pages/vmDeleteBlock';
import VMListBlock from './pages/vmListBlock';
import DeleteShowAdmin from './pages/adminDeleteShow'

// function App() {
//   const [authenticated, changeUserType] = React.useState(0);  
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         <BrowserRouter>
//           <Routes>
//             <Route path="/" element={<Layout />}>
//             <Route index element={<Home />} />
//             <Route path="login" element={<Login />} />
//             <Route path="loginAdmin" element={<LoginAdmin />} />
//             <Route path="vmMainScreen" element={<VMmain />} />
//             <Route path="vmCreateVenue" element={<VMCreateVenue />} />
//             <Route path="adminListVenues" element={<AdminListVenues />} />

//             <Route path="vmDeleteVenue" element={<DeleteVenue />} />
//             <Route path="vmCreateShow" element={<CreateShow />} />
//             <Route path="searchShowVenue" element={<SearchShowOrVenue />} />
//             <Route path="purchaseSeats" element={<PurchaseSeats />} />
//             <Route path="vmActivateShow" element={<ActivateShow />} />
//             {/* <Route path="vmDeleteShow" element={<DeleteShow />} /> */}
//             <Route path="deleteShow" element={<DeleteShow />} />
//             <Route path="deleteShowAdmin" element={<DeleteShowAdmin />} />
//             <Route path="adminMainScreen" element={<AdminMain />} />
//             <Route path="adminShowReport" element={<AdminShowReport />} />

//             <Route path="listShowsVM" element={<ListShowsVM />} />
//             <Route path="showAvailableSeats" element={<ShowAvailableSeats />} />
//             <Route path="listActiveShowsVenues" element={<ListActiveShowsVenues />} />
//             <Route path="vmCreateBlock" element={<VMCreateBlock />} />
//             <Route path="vmDeleteBlock" element={<VMDeleteBlock />} />
//             <Route path="vmListBlock" element={<VMListBlock />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>


//       </header>
//     </div>
//   );
// }


function App() {
  const [authenticated, changeUserType] = React.useState(0);  
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <HashRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="loginAdmin" element={<LoginAdmin />} />
            <Route path="vmMainScreen" element={<VMmain />} />
            <Route path="vmCreateVenue" element={<VMCreateVenue />} />
            <Route path="adminListVenues" element={<AdminListVenues />} />

            <Route path="vmDeleteVenue" element={<DeleteVenue />} />
            <Route path="vmCreateShow" element={<CreateShow />} />
            <Route path="searchShowVenue" element={<SearchShowOrVenue />} />
            <Route path="purchaseSeats" element={<PurchaseSeats />} />
            <Route path="vmActivateShow" element={<ActivateShow />} />
            {/* <Route path="vmDeleteShow" element={<DeleteShow />} /> */}
            <Route path="deleteShow" element={<DeleteShow />} />
            <Route path="deleteShowAdmin" element={<DeleteShowAdmin />} />
            <Route path="adminMainScreen" element={<AdminMain />} />
            <Route path="adminShowReport" element={<AdminShowReport />} />

            <Route path="listShowsVM" element={<ListShowsVM />} />
            <Route path="showAvailableSeats" element={<ShowAvailableSeats />} />
            <Route path="listActiveShowsVenues" element={<ListActiveShowsVenues />} />
            <Route path="vmCreateBlock" element={<VMCreateBlock />} />
            <Route path="vmDeleteBlock" element={<VMDeleteBlock />} />
            <Route path="vmListBlock" element={<VMListBlock />} />
        </Route>
      </Routes>
    </HashRouter>


      </header>
    </div>
  );
}

export default App;
  