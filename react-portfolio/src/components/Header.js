import React from 'react';

// Components


function Header() {
 
    return (
       <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">Garrett Hudson</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <a className="nav-item nav-link" href="/About">About</a>
            <a className="nav-item nav-link" href="/resume">Resue</a>
            <a className="nav-item nav-link" href="/portfolio">portfolio</a>
            <a className="nav-item nav-link" href="/contact">Contact</a>
            </div>
        </div>
        </nav>
       </>
    )
}

export default Header;

