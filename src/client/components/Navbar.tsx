import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
            <div className="container justify-content-between">
                <Link to="/" className="navbar-brand mr-10"> <img src="media/Logo.png" style={{width: `5rem`}} alt="" /></Link>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                            <li className="nav-item"><Link to="/about" className="nav-link"> About </Link></li>
                            <li className="nav-item"><Link to="/newproduct" className="nav-link"> Watch New Product </Link></li> 
                            <li className="nav-item"><Link to="/products" className="nav-link"> View My Products </Link></li> 
                            <li className="nav-item"><Link to="/contact" className="nav-link"> Contact </Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;