
import Stack from 'react-bootstrap/Stack';
import React from 'react'
import{FaYoutube,FaInstagram,FaFacebook,FaFacebookMessenger,FaLinkedin, FaCloud}from 'react-icons/fa';
export const About = () => {
  return (
    <>
    
    
    <Stack gap={1}>
      <div className="p-1">about us</div>
      <div className="p-2">
<img  src='https://community.nasscom.in/sites/default/files/media/images/Content%20Marketing.png' className='about-image' alt='about us' />
<div className='message'>
<p>we are work with professionals as well as people who first come to approach</p>
<h1 className='about-h1'>IN OUR COURSE </h1>
<h5 className='margin'>recording video are also avalable to access at any time</h5>
<ul>
  <li>professionaly we will teach and give practice</li>
  <li>WE will help you grow in your carrer</li>
  <li>WE will make real time project</li>
  <li>WE will arrange best campus after COURSE</li>
  <li>WE will train a interview as mock interview method</li>
</ul>


<div className='icons'>
<FaYoutube className='youtube'/>
<FaFacebook className='facebook'/>
<FaFacebookMessenger className='fb'/>
<FaInstagram className='instagram'/>
<FaLinkedin className='linkedin'/>
<FaCloud className='cloud'/>
</div>

</div>

      </div>


      <div className="p-3">
<h4>TechPark<span className='spann'>@</span><span className='span'>outlook.com</span></h4>

      </div>
    </Stack>
    
    
    
    </>
   


  )
}
export default About;