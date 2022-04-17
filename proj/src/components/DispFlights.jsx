import React from 'react'
import india from '../assets/india.png'
import luf from '../assets/luf.jpeg'
import emi from '../assets/emirates.png'
import indgo from '../assets/indigo.jpeg'


const DispFlights = () => {
    const arr = [];
    for(let i =0; i<25; i++){
        arr.push({company: String.fromCharCode(i+97), number: i+97})
        // console.log(String.fromCharCode(i))
    }
    const imgs = [emi, indgo, india, luf]
    const names = ["Emirates", "Indigo", "Air India", "Lufthansa"]

    const from = "Delhi"
    const to = "Bangalore"
    const date = "12/05/2022"
    // console.log(arr)
                {/* <ul>
                {arr.map((flight) => (<li style={{listStyle: "none"}}><a href="#" >{flight.company + "   "+flight.number}</a></li>))}
            </ul> */}

    const rand = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    return (
        <section className='nav_pad text-center' >  
            <section>
                <label style={{fontSize: "20px", fontWeight: "bold", backgroundColor: "#89edfa", borderRadius: "10px", padding: "10px"}}>{from}</label>
                <span style={{fontWeight:"bold", fontSize: "40px"}}>&emsp; &#x2192; &emsp;</span>
                <label style={{fontSize: "20px", fontWeight: "bold", backgroundColor: "#89edfa", borderRadius: "10px", padding: "10px"}}>{to}</label>

                <br></br> <br></br>
                <span className='btn btn-warning'><b>{date}</b></span>
            </section>    
            <div className='mx-auto h-card-size' >  
            {arr.map((flight) => (            
            <div className="bcontent " >
                <div className="h-card text-center">
                    <div className="row no-gutters">
                        <div className="col-sm-4">
                            <img className='card-img p-3' src={imgs[flight.number%4]} alt="plane"></img>
                        </div>
                        <div className="col-sm-7">
                            <div className='card-body '>
                                <h5 className='card-title' style={{color: "#53486b", fontSize: "25px"}}><b>{names[flight.number%4]}</b></h5>
                                <p className='cad-text'><b>Price</b>{" : " + rand(200, 1000) + "$"}</p>
                                <a className='btn btn-primary'>enter</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ))
            }
            </div>    

        </section>
      )
}

export default DispFlights