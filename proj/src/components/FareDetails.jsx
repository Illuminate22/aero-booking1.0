const FareDetails = () => {
    const passNum = 3
    const fare = 8093
    const basefare = fare*passNum
    const tax = basefare*0.05
    const totalfare = tax+basefare
    function handleCheck(){
        const check = document.querySelector("#tnc")
        const button = document.querySelector("#sub")
        if(check.checked){
            button.disabled=false
        }
        else{
            button.disabled=true
        }
    }
    return ( 
        <>
            <div className="container border nav-pad">
                <h2 className="row m-1">Fare Details</h2>
                <p className="row m-1">Base fare = {passNum}x₹{fare} = ₹{basefare}</p>
                <p className="row m-1">Taxes and Surcharges = ₹{tax}</p>
                <h4>Total fare = ₹{totalfare}</h4>
                <div className="d-flex align-items-center">
                    <input onChange={handleCheck} type="checkbox" name="Tnc" id="tnc" className="" />
                    <label htmlFor="tnc" className="flex-fill">Accept the <a className="link-primary">Cancelation policy</a> and <a className="primary"> Terms and Conditions of use</a></label>
                </div>
                <button id="sub" disabled className="btn btn-primary row m-3">Book Now</button>
            </div>
        </>
     );
}
 
export default FareDetails;