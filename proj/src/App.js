import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import SearchBox from './components/SearchBox';
import SummaryBox from './components/SummaryBox';
import PassengerDetails from './components/PassengerDetails';
import FareDetails from './components/FareDetails';

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
      <link href='https://fonts.googleapis.com/css?family=Nunito' rel='stylesheet'></link>
      
      <Nav tabs={tabs}/>
      <FareDetails />
    </div>
  );
}

export default App;
