import React from "react";
import "./menu.css";
import { Link } from "react-router-dom";
function Menu() {
  return (
    <div className="hero">
      <div className="hero-left">
        <div className="auto-p">
          <h2 className="auto-h1">WEB DEVLOPMENT COURSES</h2>
          <p className="para">
            TRENDING <span className="color">FRONT-END</span> COURSES ARE
            AVALIBLE
          </p>
        </div>
        <div className="home-lastest-btn">
          <Link to="/Products" className="products">
            {" "}
            <div>Enroll now</div>
          </Link>

          <Link to="/Products" className="products">
            {" "}
            <img
              src="https://img.icons8.com/color/48/circled-chevron-right--v1.png"
              alt="aagaaga"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Menu;
