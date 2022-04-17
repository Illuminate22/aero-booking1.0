import Login from "../components/Login"
import Nav from "../components/Nav"

import { useNavigate } from "react-router-dom"

const LoginScreen = () => {
  return (
    <div>
        <Nav/>
        <Login/>
    </div>
  )
}

export default LoginScreen