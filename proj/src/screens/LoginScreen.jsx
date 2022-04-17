import Login from "../components/Login"
import Nav from "../components/Nav"

import { useNavigate } from "react-router-dom"

const LoginScreen = ({props}) => {
    const tab = props
  return (
    <div>
        <Nav tabs={tab}/>
        <Login/>
    </div>
  )
}

export default LoginScreen