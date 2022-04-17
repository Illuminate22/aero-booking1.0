import './App.css';

import Nav from './components/Nav';
import Login from './components/Login';
import DispFlights from './components/DispFlights';

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
    <div>
       <Nav tabs={tabs}/>
       {/* <Nav tabs={tabs}/> */}

       
      {/* <Login/>  */}
      <DispFlights/>

    </div>
  );
}

export default App;
