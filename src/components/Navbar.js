import React from 'react'
import PropTypes from 'prop-types'
export default function Navbar(props) {
    return (
        <div>
            <div className="menu">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="logo">
                                <h4>{props.titleUtils}</h4>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <nav className={`navbar navbar-expand-lg bg-${props.mode} nav`}>
                                <div className="container-fluid">
                                    <a className={`navbar-brand text-${props.mode === 'light' ? 'dark' : 'light'}`} href="/">{props.aboutText}</a>
                                    <div className="collapse navbar-collapse" id="navbarNav">
                                        <ul className="navbar-nav">
                                            <li className="nav-item" >
                                                {/* <Link className={`nav-link active text-${props.mode === 'light' ? 'dark' : 'light'}`} aria-current="page" to="/">Home</Link> */}
                                                <a className={`nav-link active text-${props.mode === 'light' ? 'dark' : 'light'}`} aria-current="page" href="/">Home</a>
                                            </li>
                                            <li className="nav-item" >
                                                <a className={`nav-link active text-${props.mode === 'light' ? 'dark' : 'light'}`} aria-current="page" href="/">About</a>
                                                {/* <Link className={`nav-link active text-${props.mode === 'light' ? 'dark' : 'light'}`} aria-current="page" to="/">About</Link> */}
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={props.toggleMode} />
                                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

Navbar.propTypes = {
    titleUtils: PropTypes.string.isRequired,
    aboutText: PropTypes.string,
}
Navbar.defaultProps = {
    titleUtils: "default Logo",
    aboutText: "About text",
}