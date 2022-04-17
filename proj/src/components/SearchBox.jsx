import SearchFlights from "./SearchFlights";
import Searchtabs from "./Searchtabs";
// import Back from "../assets/luggage3.png"


const SearchBox = () => {

    return ( 
        
        <div className="container rounded " style={{marginLeft: "10%", marginTop:"8%", width: "600px"}}>
        <Searchtabs />
        <SearchFlights />
        </div>
     );
}
 
export default SearchBox;