
import Back from "../assets/runway.jpg"

const Login = () => {
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

  return(
    <main className='d-flex text-center min-vh-100' style={sectionStyle}>
      <div className="container d-flex">
        <div class="loginbox">
          <h2>Login</h2>
                 <form className='form-container'>
           <div className='form-group'>
             <input type="email" className='form-control' placeholder='Enter email' required></input>
           </div>
           <div className='form-group'>
             <input type="password" className='form-control' placeholder='Password' required></input>
           </div>
           <div className='form-group'>
             <a href='#' style={{textDecoration: "none"}}>Forgot password?</a>
          </div>
           <input className="w-100 btn btn-lg btn-dark border-white" id="sub_log" type="submit" name='' value="Login"/>
         </form>
        </div>
      </div>
    </main>
  )


}

export default Login



