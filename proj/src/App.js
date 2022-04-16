import './App.css';

// import DispFlights from './components/DispFlights';
import Nav from "./components/Nav";
import Login from './components/Login';

function App() {
  const tabs = [
  {
    id:1,
    name: "Home"
  },
  {
    id:2,
    name: "About"
  },
  {
    id:3,
    name: "Logout"
  },
  ]
  return (
    <div className="App">
      <Login/>
      <Nav/>
      {/* <DispFlights/> */}
    </div>
  );
}

export default App;
