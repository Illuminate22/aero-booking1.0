import React from 'react'
import india from '../assets/india.png'
import luf from '../assets/luf.jpeg'
import emi from '../assets/emirates.png'
import indgo from '../assets/indigo.jpeg'


const DispFlights = ({props}) => {

    const imgs = [emi, indgo, india, luf]
    // const names = props[0]

    // const from = props[1]
    // const to = props[2]
    // const dep_date = props[3]
    // const arr_date = props[4]
    const [names, company, from, to, dep_date, arr_date, arr, flights_un, priceIdx, prices] = props
    // console.log(arr)
                {/* <ul>
                {arr.map((flight) => (<li style={{listStyle: "none"}}><a href="#" >{flight.company + "   "+flight.number}</a></li>))}
            </ul> */}

    console.log(prices)    

    

    // console.log(company)


    return (
        <section className='nav-pad text-center' >  
            <section>
                <label style={{fontSize: "20px", fontWeight: "bold", backgroundColor: "#89edfa", borderRadius: "10px", padding: "10px"}}>{from}</label>
                <span style={{fontWeight:"bold", fontSize: "40px"}}>&emsp; &#x2192; &emsp;</span>
                <label style={{fontSize: "20px", fontWeight: "bold", backgroundColor: "#89edfa", borderRadius: "10px", padding: "10px"}}>{to}</label>

                <br></br> <br></br>
                <span className='btn btn-warning'><b>{dep_date} </b></span>
                &emsp;&emsp;&emsp;&emsp;
                <span className='btn btn-warning'><b>{arr_date}</b></span>

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
                                <h5 className='card-title' style={{color: "#53486b", fontSize: "25px"}}><b>{names[flight.number%4][0]}</b></h5>
                                <p className='cad-text'><b>Price</b>{" : "+ prices[flight.number]}</p>
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