import {useState} from "react"


const Searchtabs = () => {

  function clickedLink(ind){
    if(!tabs[ind].active){
      console.log(tabs[0+!ind])
      tabs[ind].active = true
      tabs[0+!ind].active = false
      setTabs([...tabs])
    }
  }

    const [tabs, setTabs] = useState([
        {id:1,
        name:"Flights",
        active: true},
        {id:2,
        name:"Hotels",
        active: false}
    ]);


    return ( 
    <>
    <ul className="nav nav-pills nav-justified">
  <li className="nav-item">
    <a onClick={() => clickedLink(0)} className={"nav-link " + (tabs[0].active ? "active" : "")} >Flights</a>
  </li>
</ul>
    </> );
}


 
export default Searchtabs;