import { useState } from "react";
import PassengerInput from "./PassengerInput";

const PassengerDetails = () => {
    let [dummyarray, setarray] = useState([0])
    function handleNum(){
        const numIn = document.querySelector("#numpass")
        dummyarray = []
        for(let i = 0; i<numIn.value; i++)
        {
            dummyarray.push(i)
            console.log(dummyarray)
        }
        setarray([...dummyarray])
    }
    return ( 
    <>
        <div className="container border">
            <h1>Passenger Details</h1>
            <div className="row">
                <input type="number" name="numpass" min={1} defaultValue={1} onChange={handleNum} className="col-1" id="numpass" />
                <label htmlFor="numpass" className="col">Number of Passengers</label>
            </div>
            <div className="passinput">
            {dummyarray.map((i) => (<PassengerInput key={i} />))}
            </div>
            <div className="row">
                <p className="col">Contact Details</p>
                <input type="email" name="emailin" id="emailin" placeholder="Email-id" className="form-control col" />
                <input type="tel" name="phonein" id="phonein" minLength={10} maxLength={13} className="form-control col" placeholder="Mobile number" />
            </div>
        </div>
    </> );
}
 
export default PassengerDetails;