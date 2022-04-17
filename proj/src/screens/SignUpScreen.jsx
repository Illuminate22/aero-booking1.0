import SignUp from "../components/SignUp"
import Nav from "../components/Nav"
const SignUpScreen = ({props}) => {
    const tab = props
  return (
    <div>
        <Nav tabs={tab}/>
        <SignUp/>
    </div>
  )
}

export default SignUpScreen