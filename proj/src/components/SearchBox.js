import SearchFlights from "./SearchFlights";
import Searchtabs from "./Searchtabs";

const SearchBox = () => {
    return ( 
        <>
        <div className="m-5 p-3 container rounded border border-primary">
        <Searchtabs />
        <SearchFlights />
        </div>
        </>
     );
}
 
export default SearchBox;