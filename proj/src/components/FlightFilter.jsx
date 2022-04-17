import { useState } from "react";
import { Accordion} from "react-bootstrap"

const FlightFilter = ({props}) => {

    // function onlyUnique(value, index, self) {
    //      return self.indexOf(value) === index;
    // }

    // let flights=[]

    // for(let i =0; i<20; i++){
    //     flights.push((props[0][i].number))
    // }
    // flights = flights.filter(onlyUnique)
    // const company = props[1]
    // console.log(company)
    // console.log("hello ",props)
    // console.log(props)

    const [search, setSearch] = useState('');
    const [checkS, setCheckS] = useState(props[0]);
    const [range, setRange] = useState(200)

    var check_arr = []
    for(let i in props[0]){
        check_arr.push(false)
    }
    const [checkbox, setCheckbox] = useState(check_arr)



    const onSearch = () =>{
        var idx = []
        var str;
        for(let i in props[0]){
            str = props[0][i].toLowerCase();
            if(str.includes(search.toLowerCase())){
                idx.push(props[0][i])
            }
        }
        setCheckS(idx)
    }


    
    const toggleCheck = (e, i) =>{
        let temp = checkbox
        temp[i] = !temp[i]
        setCheckbox(temp)

        // console.log(checkbox)

        // props[2]()
    }
    const onApply = (e) =>{
        let temp2 = []
        console.log(props[5])

        console.log(checkbox)
        for(let i=1; i<props[5].length; i++){
            if(checkbox[(i)%4]){
                temp2.push(props[5][i-1])
            }
        }
        props[4](temp2)
        // console.log(props[3])
    }


  return (
    <section className="nav-pad" style={{position: "fixed"}}>
        <Accordion defaultActiveKey="0" >
        <Accordion.Item style={{background:"#ffffcc"}}>
            <Accordion.Header ><span className="btn btn-info m-1"><b>Filter</b></span></Accordion.Header>
            <Accordion.Body>
                <div className="d-flex justify-content-between">
                {/* <div> */}
                    <Accordion defaultActiveKey="1"  >
                        <Accordion.Header ><span className="btn btn-warning m-2"><b>Price</b></span></Accordion.Header>
                        <Accordion.Body>
                            <input type="range" min={200} max={1000} onChange={(e) => setRange(e.target.value) } value ={range}></input>
                            <div className="d-flex justify-content-between">
                                <label>1000</label>
                                <label>2000</label>
                            </div>
                        </Accordion.Body>
                    </Accordion>

                    <Accordion defaultActiveKey="2">
                        <Accordion.Header><span className="btn btn-warning m-2"><b>Date</b></span></Accordion.Header>
                        <Accordion.Body>
                            <label>Departure Time</label>
                            <br></br>
                            <input type="time"></input>
                            <p></p>
                            <label>Departure Date</label>
                            <br></br>
                            <input type="date"></input>
                        </Accordion.Body>
                    </Accordion>

                    <Accordion defaultActiveKey="3">
                        <Accordion.Header><span className="btn btn-warning m-2"><b>Airlines</b></span></Accordion.Header>
                        <Accordion.Body>
                            <div className="input-group">
                                <div className="form-outline">
                                    <input type="search" id="form1" className="form-control" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
                                </div>
                                <button type="button" className="btn btn-primary" onClick={onSearch}>
                                &#x1F50E;
                                </button>

                            </div>
                                <button type="button" className="btn btn-primary mt-2" onClick={(e) => setCheckS(props[0])}>
                                    Show All
                                </button>
                            <p></p>
                            <div>
                                {checkS.map((comp) => (
                                    <div className="d-flex justify-content-between" ><label>{comp[0]}&emsp;</label><input className="form-check-input" type="checkbox" onChange={(e) => toggleCheck(e, comp[1])}></input></div>
                                ))}
                            </div>

                        </Accordion.Body>
                    </Accordion>
                    <Accordion defaultActiveKey="4">
                        <Accordion.Header><span className="btn btn-warning m-2"><b>Stops</b></span></Accordion.Header>
                        <Accordion.Body>
                            d
                        </Accordion.Body>
                    </Accordion>
                </div>
                <input type="submit" value="Apply" className="m-3 btn" style={{backgroundColor: "#53486b", color: "white"}} onClick={onApply}></input>
            </Accordion.Body>
            
        </Accordion.Item>

        </Accordion>
    </section>
  )
}

export default FlightFilter