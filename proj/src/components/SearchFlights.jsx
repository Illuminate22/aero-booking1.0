import { useState } from "react";
import { useNavigate } from "react-router-dom"

const SearchFlights = () => {

    const navigate = useNavigate()
    const [ret, setRet] = useState(false)
    function roundtrip() {
        const round = document.querySelector("#round")
        const retrn = document.querySelector("#returnDate")
        if(round.checked){
            retrn.disabled = false
        }
        else{
            retrn.disabled = true
        }
    }
    function handleRev(){
        const fromSelect = document.getElementById("from")
        const toSelect = document.getElementById("to")
        const temp = fromSelect.value
        fromSelect.value = toSelect.value
        toSelect.value = temp
    }

    function handleClk(){
        navigate("/view_flights")
    }
    return ( 
        <>
        <div className="container sum-box">
            <div  >
                <ul className="row list-unstyled">
                    <li className="col" >
                        <label htmlFor="one-way" onClick={roundtrip} className="my-0 ms-3" >
                            <input type="radio" defaultChecked name="trip-type" id="one-way" autoComplete="off"  />One-way
                        </label>
                    </li>
                    <li id="round-trip" className="col">
                        <label htmlFor="round" onClick={roundtrip} className="my-0 ms-3">
                            <input type="radio" name="trip-type" id="round" autoComplete="off"  /> Round-trip
                        </label>
                    </li>
                </ul>
            </div>
            <div className="row">
                <div className="col">
                    <p>From</p>
                    <select className="form-select" id="from">
                        <option selected>Choose an airport</option>
                        <option value="Bengaluru, IN">Bengaluru, IN</option>
                        <option value="New Delhi, IN">New Delhi, IN</option>
                        <option value="Chennai, IN">Chennai, IN</option>
                        <option value="Kolkata, IN">Kolkata, IN</option>
                        <option value="Mumbai, IN">Mumbai, IN</option>
                    </select>
                </div>
                <button onClick={handleRev} className="btn btn-primary btn-sm m-1 col-1">⥦</button>
                <div className="col">
                    <p>To</p>
                    <select className="form-select" id="to">
                        <option selected>Choose an airport</option>
                        <option value="Bengaluru, IN">Bengaluru, IN</option>
                        <option value="New Delhi, IN">New Delhi, IN</option>
                        <option value="Chennai, IN">Chennai, IN</option>
                        <option value="Kolkata, IN">Kolkata, IN</option>
                        <option value="Mumbai, IN">Mumbai, IN</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p>Departure</p>
                    <input type="date" className="form-control" />
                </div>
                <div id="return-date" className="col">
                    <p>Return</p>
                    <input type="date" id="returnDate" disabled className="form-control" />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p>Number of Passengers</p>
                    <input type="number" className="form-control" />
                </div>
                <div className="col">
                    <p>Class</p>
                    <select className="form-select" name="class">
                        <option value="economy">Economy</option>
                        <option value="business">Business</option>
                    </select>
                </div>
            </div>
            <div className="row">
            <button onClick={handleClk} className="btn px-0 btn-primary mt-2 mx-2">Search Flights</button>        </div></div>
        </>
     );
}

// functio
 
export default SearchFlights;