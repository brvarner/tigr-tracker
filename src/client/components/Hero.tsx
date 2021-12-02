import * as React from 'react';
import Form from './Form';


const Hero: React.FC<HeroProps> = props => {

    return (
    
    <div className="container my-5">
    <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 shadow-lg">
      <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 className="display-4 fw-bold lh-1">Let the Deals Find You</h1>
        <p className="lead">The Tigr Tracker finds the deals you've been looking for and lets you know about them before anybody else. Just follow the product you want, enter your email, sit back, and wait.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Learn More</button>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">Sign-Up</button>
        </div>
      </div>
      <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img className="rounded-lg-3" src="media/Collage.jpg" alt="" width="720"></img>
      </div>
    </div>
  </div>
      
    );
};

interface HeroProps {}

export default Hero;
