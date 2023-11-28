import React from 'react'
import './service.css'

import {Link} from "react-router-dom";


const carddata=[
  {
    title:" Free Tutorials",
    link:"https://www.TechPark.com/tutorials/index.php",
    Description:" Enjoy our free tutorials like millions of other internet users since 1999"
    
  },
  {
    title:"References",
    link:"",
    Description:"Explore our selection of references covering all popular coding languages"
  },
  {
    title:"Create a Website",
    link:"",
    Description:"Create your own website with TechPark Spaces - no setup required"
  },  
  {
    title:"Exercises",
    link:"",
    Description:"Test your skills with different exercises"
  }, 
   {
    title:"Quizzes",
    link:"",
    Description:"Test yourself with multiple choice questions"
  }, 
   {
    title:"Get Certified",
    link:"",
    Description:"Document your knowledge"
  },  
  {
    title:"Log in / Sign Up",
    link:"",
    Description:"Create a free TechPark Account to Improve Your Learning Experience    "
  },  
  {
    title:"My Learning",
    link:"",
    Description:"Track your learning progress at TechPark and collect rewards    "
  }, 
   {
    title:"Upgrade",
    link:"",
    Description:" Become a PRO user and unlock powerful features (ad-free, hosting, videos,..) "
  }, 
   {
    title:"Where To Start",
    link:"",
    Description:" Not sure where you want to start? Follow our guided path "
  },  
  {
    title:"Code Editor (Try it)",
    link:"",
    Description:" With our online code editor, you can edit code and view the result in your browser "
  },
  {
    title:"Templates",
    link:"",
    Description:" We have created a bunch of responsive website templates you can use - for free!    "
  }, 
  {
    title:"Web Hosting",
    link:"",
    Description:" Host your own website, and share it to the world with TechPark Spaces  "
  }, 
  {
    title:"How To's",
    link:"",
    Description:" Large collection of code snippets for HTML, CSS and JavaScript  "
  }, 
  {
    title:"CSS Framework",
    link:"",
    Description:" Build fast and responsive sites using our free W3.CSS framework  "
  }, 
  {
    title:"Browser Statistics",
    link:"",
    Description:" Read long term trends of browser usage  ",
  },  

]
function Services() {
  return (
    <>
    <div className="containers ">
      <h1 className='service-h1 '>ALL OUR SERVICES</h1>
      <p className='service-p mt-3'>TechPark offers a wide range of services and products for beginners and professionals,
helping millions of people everyday to learn and master new skills.</p>
<div className="row g-3 row-col-1 row-col-md-2 row-col-lg-2 mt-5">
  {carddata.map ((card,index) =>(
<div className="col-lg-3 col-md-6" key={index} >
<div className="cards h-100">
<div className="cardbodys mt-3">

  <h4
  className='card-titles'
  style={{
    fontSize:"21px",
    lineHeight:"23px",
    fontWeight:"400",
    
  }}
  >
<Link className='card-links' to={card.link}>
{card.title}
</Link>

  </h4>
  <p className='card-texts text-secondary'style={{fontSize:"14x " ,  }}>
{card.Description}
  </p>
  <p style={{
   
    lineHeight:"12px",
    fontSize:"12px",
    fontWeight:"bold"}}>
<Link 
className='nav-link read'
target='blank'
to={card.link}
    ></Link>
  </p>
  </div>
 
</div>
</div>
  ))}
</div>
</div>

    
    
    </>
  )
}

export default Services