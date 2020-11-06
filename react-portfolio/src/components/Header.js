import React from 'react'
import { Link, useLocation } from "react-router-dom";

// Components


function Header() {
    const location = useLocation();

    const font = {
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontWeight: '600',
        fontSize: '1.2rem',
        textDecoration: 'none'
    }
 
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={font}>
        <Link to="/" className={location.pathname === "/" ? "nav-link active navbar-brand" : "nav-link navbar-brand"} style={{fontSize: '2rem'}}>
            Garrett Hudson
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <Link to="/about" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>About</Link>
            <Link to="/resume" className={location.pathname === "/resume" ? "nav-link active" : "nav-link"}>Resume</Link>
            <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>Portfolio</Link>
            <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>Contact</Link>
            </div>
        </div>
    </nav>
    )
}

export default Header
