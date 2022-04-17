import './App.css';

import Nav from './components/Nav';
import Login from './components/Login';
import DispFlights from './components/DispFlights';
import SearchBox from './components/SearchBox';
import SearchFlights from './components/SearchFlights';
import Searchtabs from './components/Searchtabs';
import FlightFilter from './components/FlightFilter';
import FareDetails from './components/FareDetails'
import PassengerDetails from './components/PassengerDetails'
import PassengerInput from './components/PassengerInput'
import SummaryBox from './components/SummaryBox' 
import {useState} from "react";

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

  const flights = [];
  for(let i =0; i<25; i++){
    flights.push({company: String.fromCharCode(i+97), number: i+97})
    // console.log(String.fromCharCode(i))
  }
  const names = [
    [
      "Emirates",0
    ],
    [
      "Indigo",1
    ],
    [
      "Air India",2
    ],
    [
      "Lufthansa",3
    ]
  ]
   

  

  const from = "Delhi"
  const to = "Bangalore"
  const dep_date = "12/05/2022"
  const arr_date = "14/05/2022"

  const [company, setCompany] = useState(names)



  const signIn = (email) => {
      console.log(email)
  }

  return (
    <div>
       <Nav tabs={tabs}/>
       {/* <Nav tabs={tabs}/> */}

       <FlightFilter props={[names, company, setCompany]}/>

      {/* <Login onAdd = {signIn}/>  */}
      <DispFlights props={[names, company, from, to, dep_date, arr_date, flights]}/>
      {/* <SearchBox/> */}
      {/* <SearchFlights/> */}
      {/* <Searchtabs/> */}
      {/* <FareDetails/> */}
      {/* <PassengerDetails/> */}
      {/* <PassengerInput/> */}
      {/* <SummaryBox/> */}
    </div>
  );
}

export default App;
