import { useNavigate } from "react-router-dom"
import icon from "../assets/dose.png"

const Nav = ({tabs}) => {
  const navigate = useNavigate()
  return (
    <header>
        <nav>
            <ul className="nav-links">
            {tabs.map((tab) => (<li key={tab.id}><a onClick={()=>navigate("/")} ><img src={icon}></img>{"Dose.inc"}</a></li>))}            </ul>
        </nav>
        <nav className="nav-right">
        <a className="sign-up-btn" onClick={()=>navigate("/sign")}>SignUp</a>
            <a id="log" onClick={()=>navigate("/login")}>Login</a>
        </nav>
    </header>
  )
}

export default Nav