import React from 'react';

// Navlink to redirect the component
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return(
        <>

<nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow">
                <div  className="container-fluid ">
                    <NavLink className="navbar-brand text-dark fw-bold " to="/"><h1>Presento<span style={{color:'red'}}>.</span></h1></NavLink>

                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse fw-bold " id="navbarNav">
                        <ul className="navbar-nav m-auto ">
                            <li className="nav-item mx-3">
                                <NavLink className="nav-link text-dark active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item mx-3">
                                <NavLink className="nav-link text-dark" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item mx-3">
                                <NavLink className="nav-link text-dark" to="/services">Services</NavLink>
                            </li>

                            <li className="nav-item mx-3">
                                <NavLink className="nav-link text-dark" to="/portfolio">Portfolio</NavLink>
                            </li>

                            <li className="nav-item mx-3">
                                <NavLink className="nav-link text-dark" to="/team">Team</NavLink>
                            </li>

                            <li className="nav-item mx-3">
                                <NavLink className="nav-link text-dark" to="/contact">Contact Us</NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

        
        </>
    )
}

export default Navbar