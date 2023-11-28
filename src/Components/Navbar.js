import './navbar.css'
import React, { useState } from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    const[ismoblie,setIsmoblie] = useState(false)
  return (
   
   <nav className='Navbar'>
   
   <h3> <Link to='/' className='logo' > TechPark </Link></h3>
 
   <ul className= {ismoblie ? 'tab-moblie' :'tab'} onClick={() => setIsmoblie(false)}>
    <Link to='/' className='Menu'> <li> menu</li>  </Link>
   
    <Link to='/About' className='about'> <li>  about</li> </Link>
  
    

    <Link to='/Services' className='service'> <li>service</li></Link>


    <Link to='/Products' className='products'> <li>courses</li></Link>

    <Link to='/Singup' className='signup'><li>signup</li></Link>

    </ul>

<button className=' moblie-menu' onClick={() => setIsmoblie(!ismoblie)}>
    {ismoblie ? <h1>X</h1> :<h1>=</h1>}
</button>
   </nav>
   
   
   
 
  )
}

export default Navbar