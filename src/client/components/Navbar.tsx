import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-success" id="mainNav" style={{ height:"90px"}}>
        <div className="container">
        <Link to="/" className="navbar-brand"> <img src="media/Logo.png" alt="" id="nav-image" style={{ width:"120px", height:"105px"}} /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i className="fas fa-bars ms-1" ></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav text-uppercase text-dark ms-auto py-4 py-lg-0">
                    <li className="nav-item"><Link to="/about" className="nav-link text-dark"> About </Link></li>
                    <li className="nav-item"><Link to="/newproduct" className="nav-link text-dark"> Watch New Product </Link></li> 
                    <li className="nav-item"><Link to="/products" className="nav-link text-dark"> View My Products </Link></li> 
                    <li className="nav-item"><Link to="/contact" className="nav-link text-dark"> Contact </Link></li>
                    <li className="nav-item"><Link to="/admin" className="nav-link text-success"> Admin </Link></li>
                </ul>
            </div>
        </div>
    </nav>
    );
};

export default Navbar;