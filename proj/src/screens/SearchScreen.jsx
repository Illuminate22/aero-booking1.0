import Nav from "../components/Nav";
import SearchBox from "../components/SearchBox";
import Back from "../assets/luggage.jpg"


const SearchScreen = ({props}) => {
    var sectionStyle = {
        backgroundImage: `url(${Back})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        // Width: "100%",
        backgroundPosition: "center", 
        opacity: 1,
        // paddingTop: "180px", 
        // paddingRight: "40px",
        // margin: "0"
    
      };
    const [tabs] = props
    return ( 
        <div >
            <Nav tabs={tabs}/>
            <div className="d-flex text-center min-vh-100 nav-pad" style={sectionStyle}>
            <SearchBox  />
            </div>
        </div>
     );
}
 
export default SearchScreen;