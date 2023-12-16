import '../App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Welcome to Seats4u
        </h1>
        <ButtonLink to="/vmCreateVenue">Create Venue</ButtonLink>
        <ButtonLink to="/login">Login as venue manager</ButtonLink>
        <ButtonLink to="/loginAdmin">Login as an admin</ButtonLink>

        {/* <ButtonLink to="/searchShowVenue">Search Shows or Venues</ButtonLink> */}
        {/* <label for="purchaseSeatButton">Test</label> */}
        <h2>For consumers: </h2>
        <ButtonLink to="/searchShowVenue">Search Shows to Purchase Seats</ButtonLink>
        <ButtonLink to="/listActiveShowsVenues">List Shows</ButtonLink>

      </header>
    </div>
  );
}

function ButtonLink({ to, children }) {
  return <Link to={to}><button>{children}</button></Link>;
}

export default App;
