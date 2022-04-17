import FareDetails from "../components/FareDetails";
import Nav from "../components/Nav";
import PassengerDetails from "../components/PassengerDetails";

const BookingScreen = ({props}) => {
    const [tabs] = props
    return ( 
        <>
            <Nav tabs={tabs} />
            <div className="conatiner row p-10">
                <div className="col-1"></div>
            <div className="col-7">
            <PassengerDetails />
            </div>
            <div className="col-3"><FareDetails /></div>
            </div>
            <div className="col-1"></div>
        </>
     );
}
 
export default BookingScreen;