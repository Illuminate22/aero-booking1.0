import { Accordion} from "react-bootstrap"

const FlightFilter = () => {
  return (
    <>
        <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
            <Accordion.Header><b>Filter</b></Accordion.Header>
            <Accordion.Body>
                <input type="submit" className="btn btn-warning" value="goo"></input>
                
            </Accordion.Body>
        </Accordion.Item>

        </Accordion>
    </>
  )
}

export default FlightFilter