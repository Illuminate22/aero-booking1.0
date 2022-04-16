import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Login from './components/Login';
// import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import dispa from './components/Disp';

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
      {/* <Nav tabs={tabs}/> */}
      <dispa/>
      {/* <Login/> */}
    </div>
  );
}

export default App;
