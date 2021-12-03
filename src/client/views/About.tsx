import * as React from 'react';
import Affiliates from '../components/Affiliates';
import Attribution from '../components/Attribution';
import Carousel from '../components/Carousel';
import Form from '../components/Form';
import Hero from '../components/Hero';



const About: React.FC<AboutProps> = props => {

    return (
        <main className="row justify-content-center" style={{backgroundImage: `linear-gradient(to right,#d38236,#4c956c`}}>
            <h1 className="text-dark text-center display-6"><strong>Welcome to the TIGR tracker!</strong></h1>
            <p className="text-dark text-center display-2 my-3">TIGR Tracker was built by four people who felt that you should spend less time hunting for deals and more time doing what you want.</p>
            <p className="text-dark text-center display-2 my-3">We watch websites of the hottest retailers around, checking for sales on the products you crave every minute to ensure you don't miss a thing.</p>
            <p className="text-dark text-center display-2 my-3">Once our little robots spot a sale, you immediately receive an email letting you know that it's time to pounce!</p>
        </main>
    );
};

interface AboutProps {}

export default About;