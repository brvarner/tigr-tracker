import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './components/home';
import Admin from './components/admin';


const App = () => {


	return (
		<Router>
			<Routes>
				{/* <Route path="/" element={<Home/>} />
				<Route path="/details/:id" element={<Details/>} />
				<Route path="/addproduct" element={<addProduct/>} />
				<Route path="/products" element={<Products/>} /> */}
				<Route path="/admin" element={<Admin/>} />
			</Routes>
		</Router>
	);

};

export default App;


