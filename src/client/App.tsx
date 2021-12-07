import React from 'react';
import './scss/app';
import Home from './views/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './views/About';
import Products from './views/Products';

const App = () => {
	return (

		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/newproduct" element={<Products />} />
				</Routes>
			</BrowserRouter>
		</div>

	)
}

export default App;