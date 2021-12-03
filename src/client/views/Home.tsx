import * as React from 'react';
import Affiliates from '../components/Affiliates';
import Attribution from '../components/Attribution';
import Carousel from '../components/Carousel';
import Form from '../components/Form';
import Hero from '../components/Hero';



const Home: React.FC<HomeProps> = props => {

    return (
        <main className="row justify-content-center" style={{backgroundImage: `linear-gradient(to right,#d38236,#4c956c`}}>
            <Hero />
            <Carousel />
            <Affiliates />
            <Attribution />
            <section className="col-5 justify-content-center card rounded" style={{width: `20rem`}}>
                     {/* <div className="card-body"><Form submitForm={{}} /></div> */}
            </section>
        </main>
    );
};

interface HomeProps {}

export default Home;