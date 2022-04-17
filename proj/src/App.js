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
import { Route, Routes} from 'react-router-dom';
import SearchScreen from './screens/SearchScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import DisplayScreen from './screens/DisplayScreen';

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

  const flights_un = [];
  for(let i =0; i<25; i++){
    flights_un.push({company: names[i%4][0], number: i})
    // console.log(String.fromCharCode(i))
  }

   
  const rand = (min, max) => Math.floor(Math.random() * (max - min)) + min;

  var prices = []
  for(let i in flights_un){
      prices.push(rand(200, 1000))
  }
  

  const from = "Delhi"
  const to = "Bangalore"
  const dep_date = "12/05/2022"
  const arr_date = "14/05/2022"

  const [company, setCompany] = useState(names)
  const [flights, setFlights] = useState(flights_un)
  const [priceIdx, setPriceIdx] = useState([...Array(25).keys()])


  const signIn = (email) => {
      console.log(email)
  }

  return (
    <div>
       {/* <Nav tabs={tabs}/> */}
       {/* <Nav tabs={tabs}/> */}

       {/* <FlightFilter props={[names, company, setCompany, flights, setFlights, flights_un, priceIdx, setPriceIdx, prices]}/> */}

      {/* <Login onAdd = {signIn}/>  */}
      {/* <DispFlights props={[names, company, from, to, dep_date, arr_date, flights, flights_un, priceIdx, prices]}/> */}
      {/* <SearchBox/> */}
      {/* <SearchFlights/> */}
      {/* <Searchtabs/> */}
      {/* <FareDetails/> */}
      {/* <PassengerDetails/> */}
      {/* <PassengerInput/> */}
      {/* <SummaryBox/> */}
      {/* <LoginScreen props={tabs}/> */}
      {/* <SignUpScreen props={tabs}/> */}
      <DisplayScreen props={[[names, company, from, to, dep_date, arr_date, flights, flights_un, priceIdx, prices], [names, company, from, to, dep_date, arr_date, flights, flights_un, priceIdx, prices], tabs]}/>
    </div>
  );
  
    //    <BookingScreen props = {[tabs]} />

  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path="/" element={<SearchScreen props={[tabs]}/>}></Route> 
  //       <Route path="/login" element={<LoginScreen props={tabs}/>}></Route>
  //       <Route path="/sign" element={<SignUpScreen props={tabs}/>}></Route>
  //       <Route path="/view_flights" element={<DisplayScreen props={[names, company, from, to, dep_date, arr_date, flights, flights_un, priceIdx, prices, tabs]}/>}></Route>
  //       <Route path="/book" element={<BookingScreen props={[tabs]}/>}></Route>
  //     </Routes>
  //   </BrowserRouter>


  // );
}

export default App;
