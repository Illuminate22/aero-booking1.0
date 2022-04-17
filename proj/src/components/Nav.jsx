// import "../assets/styles/nav.css"
const Nav = ({tabs}) => {
  return (
    <header>
        <nav>
            <ul className="nav-links">
                {tabs.map((tab) => (<li key={tab.id}><a href="#" >{tab.name}</a></li>))}
            </ul>
        </nav>
        <nav className="nav-right">
            <a className="sign-up-btn" href="#">SignUp</a>
            <a id="log">Login</a>
        </nav>
    </header>
  )
}

export default Nav