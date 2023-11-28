
import React from 'react';

import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Navbar from './Components/Navbar';
import About from './pages/About';
import Singup from './pages/Singup';
import Products from './pages/Products';
import Services from './pages/Services';
import Menu from './Components/menu/Menu';

function App() {
  return (
   
<Router>

<Navbar/>
<Routes>
     <Route path="/" element={<Menu/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Products" element={<Products />}/>
    <Route path="/Services" element={<Services/>}/>
    <Route path="/Singup" element={<Singup/>}/>
</Routes>

</Router>
    
  )
}

export default App