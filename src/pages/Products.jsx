import React from 'react'
import './cards.css'

import {Link} from "react-router-dom";


const carddata=[
  {
    title:"Introduction to Front-End Development",
    image:"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/fe/7320a26ec945e6ae1a3251d38d43b2/front-end-dev1.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&fit=crop&q=50",
    link:"https://www.coursera.org/learn/introduction-to-front-end-development",
    Description:"Skills you'll gain: HTML and CSS, React (web framework), Web Development, Front-End Web Development, Web Design, Web Development Tools",
    date:"12 august 2022",
    comments:"Beginner · Course ·1-4 Weeks"
  },
  {
    title:"HTML,CSS, and Javascript for Web Developers",
    image:"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/83/e258e0532611e5a5072321239ff4d4/jhep-coursera-course4.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&fit=crop&q=50",
    link:"https://www.coursera.org/learn/html-css-javascript-for-web-developers",
    Description:"Skills you'll gain: Front-End Web Development, HTML and CSS, Javascript, Web Development",
    date:"21 august 2022",
    comments:".mixed course 1-3 months"
  },  {
    title:"React Basics",
    image:"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/2e/289c392ddc43f2a1c5840cdb8d0cec/iOS-dev8.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&fit=crop&q=50",
    link:"https://www.coursera.org/learn/react-basics",
    Description:"Skills you'll gain: React (web framework), Front-End Web Development, Javascript, Web Development",
    date:"2 august 2022",
    comments:"beginner .course .1-2 months"
  },  {
    title:"Learn HTML and CSS",
    image:"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/89/539deaa894460e8ddf94853d5245d6/learn-html-css.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&fit=crop&q=50",
    link:"https://www.coursera.org/learn/learn-html-and-css",
    Description:"Skills you'll gain: Front-End Web Development, HTML and CSS, Web Design, Web Development",
    date:"12 august 2022",
    comments:" Beginner ·Course ·1-3 Months"
  },  {
    title:"Build Website with HTML, JavaScript, AngularJS, and React",
    image:"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/c4/d0c716e7f946b799b94d4e0e88c572/Build-Dynamic-Website-using-HTML-CSS-JavaScript-jQuery-AngularJS-and-ReactR.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&fit=crop&q=50",
    link:"https://www.coursera.org/specializations/build-dynamic-website",
    Description:"Skills you'll gain: Javascript, React (web framework), Web Design, Web Development Web Development Tools",
    date:"3 august 2022",
    comments:"Beginner · Specialization 1-3 months"
  },  {
    title:"Frontend Development using React",
    image:"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/b6/d57b7e3dcc45f9a0496e698e61b124/Frontend-Development-using-React.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&fit=crop&q=50",
    link:"https://www.coursera.org/learn/frontend-development-using-react",
    Description:"Skills you'll gain: Javascript, React (web framework), Web Development, Web Development Tools, Computer Programming Tools",
    date:"18 august 2022",
    comments:".Intermediate ·Course ·1-4 Weeks"
  },  {
    title:"Angular for Front End Engineers",
    image:"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/b4/f7a169626644ef9dd3f489822cbb23/angular-icon.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&q=50&fit=crop",
    link:"https://www.coursera.org/learn/codio-angular-for-front-end-engineers",
    Description:"Skills you'll gain: Angular, Javascript, Web Development, Web Development Tools, Computer Programming Tools",
    date:"1 august 2022",
    comments:".Intermediate · Course ·1-4 Weeks"
  },  {
    title:"Developing Websites and Front-Ends with Bootstrap",
    image:"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/67/7e2c33627f4025841deba3af297b43/MicrosoftTeams-image-1-.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&fit=crop&q=50",
    link:"https://www.coursera.org/learn/developing-websites-and-front-ends-with-bootstrap",
    Description:"Skills you'll gain: Front-End Web Development, Web Development, Web Development, Web Development Tools, Computer Programming Tools  ",
    date:"6 august 2022",
    comments:".Intermediate · Course · 1-4 weeks "
  },  {
    title:"Interactivity with JavaScript",
    image:"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/d7/216ee0502611e5ab137970bddb1c09/javascript_thumnail_1x1.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&q=50&fit=crop",
    link:"https://www.coursera.org/learn/javascript",
    Description:"Skills you'll gain: Computer Programming, Front-End Web Development, Full-Stack Web Development, HTML and CSS, Javascript, Programming Principles, Semantic Web, Web Design, Web Development, Web Development Tools",
    date:"12 august 2022",
    comments:".Beginner · Course · 1 - 4 Weeks"
  },
  {
    title:"Building Web Applications in PHP",
    image:"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/11/df42a094c211e796a707f2175a9fb3/WA4E_thumbnail_PHP_1x1_2.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&q=50&fit=crop",
    link:"https://www.coursera.org/learn/web-applications-php",
    Description:"Skills you'll gain: HTML and CSS, Web Development, Web Design, Web Development, Web Development Tools, Computer Programming Tools, Programming Principles,",
    date:"12 august 2022",
    comments:".Intermediate · Course · 1 - 3 Months"
  },
  {
    title:"Introduction to HTML5",
    image:"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/32/b88140502611e5bf374909c194f0db/introhtml_thumnail_1x1.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&fit=crop&q=50",
    link:"https://www.coursera.org/learn/html",
    Description:"Skills you'll gain: Computer Programming, Front-End Web Development, HTML and CSS, Semantic Web, Web Design, Web Development, Web Development Tools, Computer Programming Tools, Programming Principles, User Experience Design",
    date:"12 august 2022",
    comments:".Beginner · Course · 1 - 4 Weeks"
  },
  {
    title:"Java FullStack Developer",
    image:"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/14/4dcbc397754fb880094f4ebde1fdb5/Java-Full-Stack-Developer-specialization-2-.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&q=50&fit=crop",
    link:"https://www.coursera.org/specializations/java-fullstack",
    Description:"Skills you'll gain: Algorithms, Java Programming, Javascript, Web Development,ruby,cloud,php,frameworks,library",
    date:"12 august 2022",
    comments:".Intermediate · Specialization · 1 - 3 Month"
  },
  
]



    function Courses() {
  return (
    
<div className="container">
<div className="row g-3 row-col-1 row-col-md-2 row-col-lg-3 mt-5">
  {carddata.map ((card,index) =>(
<div className="col-lg-3 col-md-6" key={index} >
<div className="card h-100">
<div>
<Link className="nav-link" to={card.link}>
<img src={card.image} className="card-img-top" alt="..."/>
</Link>
</div>
<div className="cardbody mt-2">

  <h4
  className='card-title'
  style={{
    fontSize:"21px",
    lineHeight:"23px",
    fontWeight:"400",
    
  }}
  >
<Link className='card-link' to={card.link}>
{card.title}
</Link>

  </h4>
  <p className='card-text text-secondary'style={{fontSize:"14px"}}>
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
    >READ.MORE</Link>
  </p>
  </div>
  <div className='card-footer' style={{lineHeight:"20px"}}>
<small className="text-body-secondary d-inline-flex w-100 text-align-left">
{card.date}{" "}
<ul>
  <li>{card.comments}</li>
</ul>
</small>
  </div>
</div>
</div>
  ))}
</div>
</div>

    
  )
}

export default Courses