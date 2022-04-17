import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
<<<<<<< HEAD
import SearchBox from './components/SearchBox';
import SummaryBox from './components/SummaryBox';
import PassengerDetails from './components/PassengerDetails';
import FareDetails from './components/FareDetails';
=======
import Login from './components/Login';
import DispFlights from './components/DispFlights';
import SearchBox from './components/SearchBox';
import SearchFlights from './components/SearchFlights';
import Searchtabs from './components/Searchtabs';
import FlightFilter from './components/FlightFilter';

>>>>>>> origin/master

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
<<<<<<< HEAD
    <div className="App">
      <link href='https://fonts.googleapis.com/css?family=Nunito' rel='stylesheet'></link>
      
      <Nav tabs={tabs}/>
      <FareDetails />
=======
    <div>
       {/* <Nav tabs={tabs}/> */}
       <Nav tabs={tabs}/>

       
      {/* <Login onAdd = {signIn}/>  */}
      <DispFlights/>
      {/* <SearchBox/> */}
      {/* <SearchFlights/> */}
      {/* <Searchtabs/> */}
      {/* <FlightFilter/> */}
>>>>>>> origin/master
    </div>
  );
}

export default App;
