import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import About from './pages/About';
import Signup from './pages/Singup';
import Products from './pages/Products';
import Services from './pages/Services';
import Menu from './Components/menu/Menu';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/About" element={<About />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/*" element={<Menu />} /> {/* Default route for home page */}
        </Routes>
      </Router>
    </>
  )
}

export default App;
