import SearchFlights from "./SearchFlights";
import Searchtabs from "./Searchtabs";

const SearchBox = () => {
    return ( 
        <>
        <div className="container rounded border border-primary" style={{paddingTop: "150px", paddingRight: "40px"}}>
        <Searchtabs />
        <SearchFlights />
        </div>
        </>
     );
}
 
export default SearchBox;