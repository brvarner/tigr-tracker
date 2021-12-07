import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './scss/app';
import Home from './views/Home';
import Navbar from './components/Navbar';
import About from './views/About';
import Products from './views/Products';
import Admin from './views/Admin'

const App = () => {
	return (

		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/newproduct" element={<Products />} />
					<Route path="/admin" element={<Admin />} />
				</Routes>
			</BrowserRouter>
		</div>

	)
}

export default App;