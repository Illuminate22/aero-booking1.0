import './App.css';

import Nav from './components/Nav';
import Login from './components/Login';
import DispFlights from './components/DispFlights';
import SearchBox from './components/SearchBox';
import SearchFlights from './components/SearchFlights';
import Searchtabs from './components/Searchtabs';
import FlightFilter from './components/FlightFilter';


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

  const signIn = (email) => {
      console.log(email)
  }

  return (
    <div>
       {/* <Nav tabs={tabs}/> */}
       <Nav tabs={tabs}/>

       
      {/* <Login onAdd = {signIn}/>  */}
      <DispFlights/>
      {/* <SearchBox/> */}
      {/* <SearchFlights/> */}
      {/* <Searchtabs/> */}
      {/* <FlightFilter/> */}
    </div>
  );
}

export default App;
