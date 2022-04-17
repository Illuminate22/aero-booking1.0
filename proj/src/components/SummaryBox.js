const SummaryBox = () => {
    function handleRev(){
        const fromSelect = document.getElementById("from")
        const toSelect = document.getElementById("to")
        const temp = fromSelect.value
        fromSelect.value = toSelect.value
        toSelect.value = temp
    }   
    function roundtrip() {
        const round = document.querySelector("#round")
        const retrn = document.querySelector("#returnDate")
        if(round.value==="roundTrip"){
            retrn.disabled = false
        }
        else{
            retrn.disabled = true
        }
    }
    return ( 
        <>
            <div className="container row border align-items-center nav-pad">
                <div className="col">
                    <p className="mb-0">Trip Type</p>
                    <select onChange={roundtrip} name="tripType" id="round" className="form-select">
                        <option value="oneWay">One way</option>
                        <option value="roundTrip">Round trip</option>
                    </select>
                </div>
                <div className="col-4 d-flex">
                    <div className="flex-fill">
                    <p className="mb-0">From</p>
                    <select defaultValue="value" className="form-select " id="from">
                        <option value="default">Choose an airport</option>
                        <option value="Bengaluru, IN">Bengaluru, IN</option>
                        <option value="New Delhi, IN">New Delhi, IN</option>
                        <option value="Chennai, IN">Chennai, IN</option>
                        <option value="Kolkata, IN">Kolkata, IN</option>
                        <option value="Mumbai, IN">Mumbai, IN</option>
                    </select>
                    </div>
                    <button onClick={handleRev} className="btn btn-primary btn-sm my-auto">⥦</button>
                    <div className="flex-fill">
                    <p className="mb-0">To</p>
                    <select defaultValue="default" className="form-select flex-fill" id="to">
                        <option value="default">Choose an airport</option>
                        <option value="Bengaluru, IN">Bengaluru, IN</option>
                        <option value="New Delhi, IN">New Delhi, IN</option>
                        <option value="Chennai, IN">Chennai, IN</option>
                        <option value="Kolkata, IN">Kolkata, IN</option>
                        <option value="Mumbai, IN">Mumbai, IN</option>
                    </select>
                    </div>
                </div>
                {/*<div className="col-1">
                </div>
                <div className="col">
                </div> */}
                <div className="col">
                    <p className="mb-0">Departure</p>
                    <input type="date" className="form-control" />
                </div>
                <div id="return-date" className="col">
                    <p className="mb-0">Return</p>
                    <input type="date" id="returnDate" disabled className="form-control" />
                </div>
                <div className="col">
                    <p className="mb-0">Passengers</p>
                    <input type="number" min={1} className="form-control" />
                </div>
                <div className="col">
                    <p className="mb-0">Class</p>
                    <select className="form-select" name="class">
                        <option value="economy">Economy</option>
                        <option value="business">Business</option>
                    </select>
                </div>
            </div>
        </>
     );
}
 
export default SummaryBox;