const Nav = ({tabs}) => {
  return (
        <header>
            {/* <a className="logo">Aero</a> */}
            <nav>
                <ul className="nav-links">
                    {tabs.map((tab) => (<li><a href="#">{tab.name}</a></li>))}
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