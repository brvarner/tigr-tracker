import * as React from 'react';
import Form from '../components/Form';
import Hero from '../components/Hero';



const Home: React.FC<HomeProps> = props => {

    return (
        <main className="row justify-content-center" style={{backgroundImage: `linear-gradient(to right,#d38236,#4c956c`}}>
            <img src="media/Logo.png" style={{width: `20rem`}} className="mb-1" />
            <Hero />
            <section className="col-5 justify-content-center my-2 card rounded" style={{width: `20rem`}}>
                     <div className="card-body"><Form submitForm={{}} /></div>
            </section>
        </main>
    );
};

interface HomeProps {}

export default Home;