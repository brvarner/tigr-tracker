import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to={"/"} className="navbar-brand"> Home </Link>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to={"/about"} className="nav-link"> About </Link> 
                        <Link to={"/newproduct"} className="nav-link"> Watch New Product </Link> 
                        <Link to={"/products"} className="nav-link"> View My Products </Link> 
                        <Link to={"/contact"} className="nav-link"> Contact </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

//  watch new product
// my products
// 

