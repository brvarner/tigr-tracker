import * as React from 'react';
import Affiliates from '../components/Affiliates';
import Attribution from '../components/Attribution';
import Carousel from '../components/Carousel';
import Portfolio from '../components/Portfolio';
import Form from '../components/Form';
import Hero from '../components/Hero';



const Home: React.FC<HomeProps> = props => {

    return (
        <main className="row justify-content-center" style={{backgroundImage: `linear-gradient(to right,#d38236,#4c956c`}}>
            <Hero />
            <Carousel />
            <Portfolio />
        </main>
    );
};

interface HomeProps {}

export default Home;