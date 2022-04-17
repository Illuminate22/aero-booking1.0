
import Back from "../assets/runway.jpg"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// import "../assets/styles/login.css"

const Login = ({onAdd}) => {
  var sectionStyle = {
    backgroundImage: `url(${Back})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    Width: "100%",
    backgroundPosition: "center", 
    opacity: 1,
    padding: 0, 
    margin: 0
    

  };
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const validateEmail = (mail) => {
    return String(mail)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  
  const onSubmit = (e) => {
    e.preventDefault()

    if(!validateEmail(email)){
      alert('Please enter a valid email address')
      return
    }
    if(!password){
      alert('Please enter a password')
    }
    navigate(-1)
    onAdd({email, password})
    setEmail('')
    setPassword('')
  }

  return(
    <main className='d-flex text-center min-vh-100 nav-pad' style={sectionStyle}>
      <div className="container d-flex">
        <div className="loginbox">
          <h2>Login</h2>
                 <form className='form-container'>
           <div className='form-group'>
             <input type="email" className='form-control' placeholder='Enter email' required value={email} onChange={(e) => setEmail(e.target.value)}></input>
           </div>
           <div className='form-group'>
             <input type="password" className='form-control' placeholder='Password' required value={password} onChange={(e) => setPassword(e.target.value)}></input>
           </div>
           <div className='form-group'>
             <a href='#' style={{textDecoration: "none"}}>Forgot password?</a>
          </div>
           <input className="w-100 btn btn-lg btn-dark border-white" id="sub_log" type="submit" name='' value="Login" onClick={onSubmit}/>
         </form>
        </div>
      </div>
    </main>
  )


}

export default Login



