import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Default Screen:
        </p>
        <p1>
          welcome to seats4u
        </p1>
        {/* <button id="find_show_or_venue"> find shows or venues</button> */}
        {/* <button id="venue_manager_login"> login as venue manager </button> */}
        <ButtonLink to="/vmCreateVenue">Create Venue</ButtonLink>
        <ButtonLink to="/login">Login as venue manager</ButtonLink>
        <ButtonLink to="/loginAdmin">Login as an admin</ButtonLink>

      </header>
    </div>
  );
}

function ButtonLink({ to, children }) {
  return <Link to={to}><button>{children}</button></Link>;
}

export default App;
