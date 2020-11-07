import React from 'react'
import { Link, useLocation } from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

// Components


function Header() {
    const location = useLocation();

    const font = {
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontWeight: '600',
        fontSize: '1.2rem',
        textDecoration: 'none',
        width: '100%'
    }
 
    return (
        <div className="container-fluid" style={font}>
            <Navbar className="navbar-dark" bg="dark" expand="lg">
                <Link to="/" className={location.pathname === "/" ? "nav-link active navbar-brand" : "nav-link navbar-brand"} style={{fontSize: '2rem'}}>
                    Garrett Hudson
                </Link>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="ml-auto">
                        <Link to="/about" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>About</Link>
                        <Link to="/resume" className={location.pathname === "/resume" ? "nav-link active" : "nav-link"}>Resume</Link>
                        <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>Portfolio</Link>
                        <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>Contact</Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header
