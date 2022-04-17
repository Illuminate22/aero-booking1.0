const PassengerInput = () => {
    return ( 
        <>
            <div className="row">
                <input required type="text" className="col form-control" name="First Name" id="fname" placeholder="First Name" />
                <input required type="text" className="col form-control" name="Last Name" id="lname" placeholder="Last Name" />
                <input required type="number" name="age" id="age" min={0} className="col form-control" placeholder="Age"  />
                <select required name="gender" id="gender" className="col form-select">
                    <option value="def">Choose gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="nb">Non-binary</option>
                </select>
                <select required name="idType" id="idType" className="col form-select">
                    <option value="def">Choose ID</option>
                    <option value="passport">Passport</option>
                    <option value="aadhar">Aadhar card</option>
                    <option value="pan">PAN card</option>
                    <option value="dl">Driver's Liscence</option>
                </select>
                <input required type="text" name="idno" id="idno" placeholder="ID Number" className="form-control col" />
            </div>
        </>
     );
}
 
export default PassengerInput;