import React from 'react';
import './scss/app';
import Form from './Form'
import LoginSlider from './components/LoginSlider';
import Home from './views/Home';
import Navbar from './components/Navbar';

const App = () => {
    return (
       
        <div className="App">
            <Navbar />
			<Home />
        </div>
        
    )
}

export default App;