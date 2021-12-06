import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './scss/app';
import Home from './views/Home';
import Navbar from './components/Navbar';
import About from './views/About';
import Products from './views/products';

const App = () => {
	return (

		<div className="App">
			
			<BrowserRouter>
				
			<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/products" element={<Products />} />

				</Routes>
			</BrowserRouter>
		</div>

	)
}

export default App;