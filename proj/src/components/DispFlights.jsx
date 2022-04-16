const DispFlights = () => {
  var arr=[];
  for(let i =0; i<26; i++){
    arr.push({company: String.fromCharCode(i+97), number: i})
    
  }

  return(
    <ul>
    {arr.map((flight) => (<><li><a href="#">{flight.company}</a></li><li><a href="#">{flight.number}</a></li></>))}
    </ul>
  )

}

export default DispFlights
