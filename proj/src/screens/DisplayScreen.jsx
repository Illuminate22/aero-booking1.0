import Nav from "../components/Nav"
import SummaryBox from "../components/SummaryBox"
import FlightFilter from "../components/FlightFilter"
import DispFlights from "../components/DispFlights"

const DisplayScreen = ({props}) => {

  return (
    <div>
        <Nav tabs={props[2]}/>
        <FlightFilter props={props[1]}/>
        <SummaryBox/>

        <DispFlights props={props[0]}/>
    </div>
  )
}

export default DisplayScreen