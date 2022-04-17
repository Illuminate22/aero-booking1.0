import Nav from "../components/Nav"
import SummaryBox from "../components/SummaryBox"
import FlightFilter from "../components/FlightFilter"
import DispFlights from "../components/DispFlights"

const DisplayScreen = () => {
  return (
    <div>
        <Nav/>
        <SummaryBox/>
        <FlightFilter/>
        <DispFlights/>
    </div>
  )
}

export default DisplayScreen