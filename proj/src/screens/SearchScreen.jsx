import Nav from "../components/Nav";
import SearchBox from "../components/SearchBox";

const SearchScreen = ({props}) => {
    const [tabs] = props
    return ( 
        <>
            <Nav tabs={tabs}/>
            <div className="w-50 my-auto ms-5 pt-20">
            <SearchBox />
            </div>
        </>
     );
}
 
export default SearchScreen;